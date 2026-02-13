import { contextBridge, ipcRenderer } from 'electron';

import type {
  DatasetInfo,
  DeploymentProposal,
  OhlcvPoint,
  RunStatus,
  StrategyConfigDraft
} from '@tradingbot/core-types';

type TradingbotApi = {
  getVersion: () => Promise<{ version: string }>;
  listDatasets: (legacyDbPath: string) => Promise<DatasetInfo[]>;
  loadSeries: (params: { legacyDbPath: string; datasetId: string; limit?: number }) => Promise<OhlcvPoint[]>;
  validateConfig: (draft: StrategyConfigDraft) => Promise<{ valid: boolean; errors: string[] }>;
  createRun: (spec: unknown) => Promise<RunStatus>;
  getRunStatus: (runId: string) => Promise<RunStatus>;
  createProposal: (input: {
    targetEnvironment: 'paper' | 'live';
    deploymentMode: 'isolated' | 'existing';
    summary: string;
    changes: string[];
  }) => Promise<DeploymentProposal>;
  approveProposal: (proposalId: string) => Promise<DeploymentProposal>;
  getSnapshot: (runId: string) => Promise<{
    runId: string;
    status: 'idle' | 'running' | 'paused' | 'error';
    pnlUsd: number;
    health: 'healthy' | 'warning' | 'critical';
    alerts: string[];
  }>;
};

const api: TradingbotApi = {
  getVersion: () => ipcRenderer.invoke('app:getVersion'),
  listDatasets: (legacyDbPath) => ipcRenderer.invoke('mockData:listDatasets', { legacyDbPath }),
  loadSeries: ({ legacyDbPath, datasetId, limit }) =>
    ipcRenderer.invoke('mockData:loadSeries', { legacyDbPath, datasetId, limit }),
  validateConfig: (draft) => ipcRenderer.invoke('strategy:validateConfig', draft),
  createRun: (spec) => ipcRenderer.invoke('backtest:createRun', spec),
  getRunStatus: (runId) => ipcRenderer.invoke('backtest:getRunStatus', { runId }),
  createProposal: (input) => ipcRenderer.invoke('deploy:createProposal', input),
  approveProposal: (proposalId) => ipcRenderer.invoke('deploy:approveProposal', { proposalId }),
  getSnapshot: (runId) => ipcRenderer.invoke('monitor:getSnapshot', { runId })
};

contextBridge.exposeInMainWorld('tradingbot', api);

export type { TradingbotApi };
