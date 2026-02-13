import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { App } from '../App';

beforeEach(() => {
  window.tradingbot = {
    getVersion: vi.fn().mockResolvedValue({ version: '0.1.0' }),
    listDatasets: vi.fn().mockResolvedValue([
      { id: '1h::BTC/USDT', ticker: 'BTC/USDT', timeframe: '1h', points: 100 },
      { id: '1h::ETH/USDT', ticker: 'ETH/USDT', timeframe: '1h', points: 100 }
    ]),
    loadSeries: vi.fn().mockResolvedValue([{ time: 1, open: 1, high: 1, low: 1, close: 1, volume: 1 }]),
    validateConfig: vi.fn().mockResolvedValue({ valid: true, errors: [] }),
    createRun: vi.fn().mockResolvedValue({ runId: 'run-1', status: 'queued', progress: 0 }),
    getRunStatus: vi.fn().mockResolvedValue({ runId: 'run-1', status: 'completed', progress: 100 }),
    createProposal: vi.fn().mockResolvedValue({
      id: 'proposal-1',
      targetEnvironment: 'paper',
      deploymentMode: 'isolated',
      summary: 'x',
      changes: [],
      approved: false
    }),
    approveProposal: vi.fn().mockResolvedValue({
      id: 'proposal-1',
      targetEnvironment: 'paper',
      deploymentMode: 'isolated',
      summary: 'x',
      changes: [],
      approved: true
    }),
    getSnapshot: vi.fn().mockResolvedValue({
      runId: 'run-1',
      status: 'idle',
      pnlUsd: 0,
      health: 'healthy',
      alerts: []
    })
  } as any;
});

describe('desktop app', () => {
  it('renders strategy studio shell', async () => {
    render(<App />);

    expect(screen.getByText('Tradingbot 2026 Strategy Studio')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Backtest Run Builder')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByTestId('series-count')).toHaveTextContent('Mock series points loaded: 1');
    });
  });
});
