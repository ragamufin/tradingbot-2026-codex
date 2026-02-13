import { describe, expect, it } from 'vitest';

import { DEFAULT_LEGACY_DB_PATH, isLegacyDbPathAvailable, listDatasets, loadSeries } from '../index';

const hasLegacyData = isLegacyDbPathAvailable(DEFAULT_LEGACY_DB_PATH);
const maybeDescribe = hasLegacyData ? describe : describe.skip;

maybeDescribe('legacy pouchdb integration', () => {
  it('lists datasets from legacy db', async () => {
    const datasets = await listDatasets(DEFAULT_LEGACY_DB_PATH);
    expect(datasets.length).toBeGreaterThan(0);
    expect(datasets[0]?.id).toContain('::');
  });

  it('loads ohlcv data for a discovered dataset', async () => {
    const datasets = await listDatasets(DEFAULT_LEGACY_DB_PATH);
    const first = datasets[0];
    if (!first) {
      throw new Error('No datasets discovered in legacy db');
    }

    const series = await loadSeries({
      legacyDbPath: DEFAULT_LEGACY_DB_PATH,
      datasetId: first.id,
      limit: 100
    });

    expect(series.length).toBeGreaterThan(0);
    expect(series[0]?.time).toBeTypeOf('number');
    expect(series[0]?.open).toBeTypeOf('number');
  });
});
