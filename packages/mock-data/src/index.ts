import fs from 'node:fs';
import path from 'node:path';

import PouchDB from 'pouchdb';

import type { DatasetInfo, OhlcvPoint } from '@tradingbot/core-types';

type Candle = { o: number; h: number; l: number; c: number; v: number };
type TimeDataDoc = { _id: string; data?: Record<string, Candle> };

const DEFAULT_LEGACY_DB_PATH = '/Users/rude/Documents/Projects/trade/crypto/tradingbot-2023/db';

function getLegacyPath(input?: string): string {
  return input ?? process.env.LEGACY_DB_PATH ?? DEFAULT_LEGACY_DB_PATH;
}

function getTimeDataDbNames(legacyDbPath: string): string[] {
  if (!fs.existsSync(legacyDbPath)) {
    return [];
  }

  return fs
    .readdirSync(legacyDbPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.endsWith('_times_data'))
    .map((entry) => entry.name)
    .sort();
}

function dbPathFor(legacyDbPath: string, dbName: string): string {
  return path.join(legacyDbPath, dbName);
}

function parseDatasetId(datasetId: string): { timeframe: string; ticker: string } {
  const [timeframe, ...tickerParts] = datasetId.split('::');
  if (!timeframe || tickerParts.length === 0) {
    throw new Error(`Invalid dataset id: ${datasetId}`);
  }

  return { timeframe, ticker: tickerParts.join('::') };
}

async function collectTickersForDb(dbPath: string): Promise<Set<string>> {
  const db = new PouchDB<TimeDataDoc>(dbPath, { auto_compaction: true });
  const tickers = new Set<string>();

  try {
    const docs = await db.allDocs({ include_docs: true });
    for (const row of docs.rows) {
      if (!row.doc?.data) continue;
      for (const ticker of Object.keys(row.doc.data)) {
        tickers.add(ticker);
      }
    }
  } finally {
    await db.close();
  }

  return tickers;
}

export async function listDatasets(legacyDbPathInput?: string): Promise<DatasetInfo[]> {
  const legacyDbPath = getLegacyPath(legacyDbPathInput);
  const dbNames = getTimeDataDbNames(legacyDbPath);
  const datasets: DatasetInfo[] = [];

  for (const dbName of dbNames) {
    const timeframe = dbName.replace('_times_data', '');
    const db = new PouchDB<TimeDataDoc>(dbPathFor(legacyDbPath, dbName), { auto_compaction: true });

    try {
      const docs = await db.allDocs({ include_docs: true });
      const tickerCounts = new Map<string, number>();

      for (const row of docs.rows) {
        const data = row.doc?.data;
        if (!data) continue;
        for (const ticker of Object.keys(data)) {
          tickerCounts.set(ticker, (tickerCounts.get(ticker) ?? 0) + 1);
        }
      }

      for (const [ticker, points] of tickerCounts.entries()) {
        datasets.push({
          id: `${timeframe}::${ticker}`,
          ticker,
          timeframe,
          points
        });
      }
    } finally {
      await db.close();
    }
  }

  return datasets.sort((a, b) => a.id.localeCompare(b.id));
}

export async function loadSeries(params: {
  legacyDbPath?: string;
  datasetId: string;
  limit?: number;
}): Promise<OhlcvPoint[]> {
  const legacyDbPath = getLegacyPath(params.legacyDbPath);
  const { timeframe, ticker } = parseDatasetId(params.datasetId);
  const dbName = `${timeframe}_times_data`;
  const db = new PouchDB<TimeDataDoc>(dbPathFor(legacyDbPath, dbName), { auto_compaction: true });

  try {
    const docs = await db.allDocs({ include_docs: true });
    const points: OhlcvPoint[] = [];

    for (const row of docs.rows) {
      if (!row.doc?.data || !row.doc.data[ticker]) {
        continue;
      }

      const candle = row.doc.data[ticker];
      points.push({
        time: Number(row.id),
        open: candle.o,
        high: candle.h,
        low: candle.l,
        close: candle.c,
        volume: candle.v
      });
    }

    const sorted = points.sort((a, b) => a.time - b.time);
    if (!params.limit || params.limit <= 0 || sorted.length <= params.limit) {
      return sorted;
    }

    return sorted.slice(sorted.length - params.limit);
  } finally {
    await db.close();
  }
}

export async function listTickersByTimeframe(params: {
  legacyDbPath?: string;
  timeframe: string;
}): Promise<string[]> {
  const legacyDbPath = getLegacyPath(params.legacyDbPath);
  const dbName = `${params.timeframe}_times_data`;
  const tickers = await collectTickersForDb(dbPathFor(legacyDbPath, dbName));
  return Array.from(tickers).sort();
}

export function isLegacyDbPathAvailable(legacyDbPathInput?: string): boolean {
  return fs.existsSync(getLegacyPath(legacyDbPathInput));
}

export { DEFAULT_LEGACY_DB_PATH };
