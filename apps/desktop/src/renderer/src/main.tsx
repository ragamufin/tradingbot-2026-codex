import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import './styles.css';

if (!window.tradingbot) {
  window.tradingbot = {
    getVersion: async () => ({ version: '0.1.0-browser' }),
    listDatasets: async () => [
      { id: '1h::BTC/USDT', ticker: 'BTC/USDT', timeframe: '1h', points: 200 },
      { id: '1h::ETH/USDT', ticker: 'ETH/USDT', timeframe: '1h', points: 200 }
    ],
    loadSeries: async () => [],
    validateConfig: async () => ({ valid: true, errors: [] }),
    createRun: async (spec: unknown) => ({
      runId: (spec as { id?: string })?.id ?? `run-${Date.now()}`,
      status: 'queued',
      progress: 0
    }),
    getRunStatus: async (runId: string) => ({ runId, status: 'completed', progress: 100 }),
    createProposal: async (input) => ({
      id: `proposal-${Date.now()}`,
      targetEnvironment: input.targetEnvironment,
      deploymentMode: input.deploymentMode,
      summary: input.summary,
      changes: input.changes,
      approved: false
    }),
    approveProposal: async (proposalId: string) => ({
      id: proposalId,
      targetEnvironment: 'paper',
      deploymentMode: 'isolated',
      summary: 'approved in browser fallback',
      changes: [],
      approved: true
    }),
    getSnapshot: async (runId: string) => ({ runId, status: 'idle', pnlUsd: 0, health: 'healthy', alerts: [] })
  };
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
