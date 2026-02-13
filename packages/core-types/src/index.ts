import { z } from 'zod';

export const channelNames = [
  'app:getVersion',
  'mockData:listDatasets',
  'mockData:loadSeries',
  'strategy:validateConfig',
  'backtest:createRun',
  'backtest:getRunStatus',
  'deploy:createProposal',
  'deploy:approveProposal',
  'monitor:getSnapshot'
] as const;

export type ChannelName = (typeof channelNames)[number];

export const appShellStateSchema = z.object({
  activeRoute: z.enum(['strategy-studio', 'monitoring']),
  leftPanelOpen: z.boolean(),
  rightPanelOpen: z.boolean(),
  layoutPreset: z.enum(['default', 'analysis', 'deployment'])
});

export type AppShellState = z.infer<typeof appShellStateSchema>;

export const chartViewModelSchema = z.object({
  symbol: z.string(),
  timeframe: z.enum(['1m', '5m', '15m', '1h', '4h', '1d']),
  overlays: z.array(z.string()),
  markers: z.array(
    z.object({
      id: z.string(),
      time: z.number(),
      price: z.number(),
      side: z.enum(['buy', 'sell'])
    })
  ),
  viewport: z.object({
    from: z.number(),
    to: z.number()
  })
});

export type ChartViewModel = z.infer<typeof chartViewModelSchema>;

export const backtestRunSpecSchema = z.object({
  id: z.string(),
  strategyIds: z.array(z.string()).min(1),
  assets: z.array(z.string()).min(1),
  timeRange: z.object({ from: z.number(), to: z.number() }),
  rebalanceMode: z.enum(['none', 'equal-weight', 'risk-parity']),
  runMode: z.enum(['single', 'multi'])
});

export type BacktestRunSpec = z.infer<typeof backtestRunSpecSchema>;

export const strategyConfigDraftSchema = z.object({
  strategyId: z.string(),
  params: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])),
  valid: z.boolean(),
  provenance: z.object({
    source: z.enum(['manual', 'chat', 'import']),
    updatedAt: z.number()
  })
});

export type StrategyConfigDraft = z.infer<typeof strategyConfigDraftSchema>;

export const deploymentProposalSchema = z.object({
  id: z.string(),
  targetEnvironment: z.enum(['paper', 'live']),
  deploymentMode: z.enum(['isolated', 'existing']),
  summary: z.string(),
  changes: z.array(z.string()),
  approved: z.boolean().default(false)
});

export type DeploymentProposal = z.infer<typeof deploymentProposalSchema>;

export const mockDataSourceConfigSchema = z.object({
  legacyDbPath: z.string(),
  datasetScope: z.array(z.string()),
  samplingWindow: z.object({ from: z.number(), to: z.number() })
});

export type MockDataSourceConfig = z.infer<typeof mockDataSourceConfigSchema>;

export const monitorSnapshotSchema = z.object({
  runId: z.string(),
  status: z.enum(['idle', 'running', 'paused', 'error']),
  pnlUsd: z.number(),
  health: z.enum(['healthy', 'warning', 'critical']),
  alerts: z.array(z.string())
});

export type MonitorSnapshot = z.infer<typeof monitorSnapshotSchema>;

export const ohlcvPointSchema = z.object({
  time: z.number(),
  open: z.number(),
  high: z.number(),
  low: z.number(),
  close: z.number(),
  volume: z.number()
});

export type OhlcvPoint = z.infer<typeof ohlcvPointSchema>;

export const datasetInfoSchema = z.object({
  id: z.string(),
  ticker: z.string(),
  timeframe: z.string(),
  points: z.number()
});

export type DatasetInfo = z.infer<typeof datasetInfoSchema>;

export const runStatusSchema = z.object({
  runId: z.string(),
  status: z.enum(['queued', 'running', 'completed', 'failed']),
  progress: z.number().min(0).max(100)
});

export type RunStatus = z.infer<typeof runStatusSchema>;

export const ipcSchemas = {
  appGetVersion: {
    req: z.undefined(),
    res: z.object({ version: z.string() })
  },
  mockDataListDatasets: {
    req: z.object({ legacyDbPath: z.string() }),
    res: z.array(datasetInfoSchema)
  },
  mockDataLoadSeries: {
    req: z.object({ legacyDbPath: z.string(), datasetId: z.string(), limit: z.number().optional() }),
    res: z.array(ohlcvPointSchema)
  },
  strategyValidateConfig: {
    req: strategyConfigDraftSchema,
    res: z.object({ valid: z.boolean(), errors: z.array(z.string()) })
  },
  backtestCreateRun: {
    req: backtestRunSpecSchema,
    res: runStatusSchema
  },
  backtestGetRunStatus: {
    req: z.object({ runId: z.string() }),
    res: runStatusSchema
  },
  deployCreateProposal: {
    req: z.object({
      targetEnvironment: z.enum(['paper', 'live']),
      deploymentMode: z.enum(['isolated', 'existing']),
      summary: z.string(),
      changes: z.array(z.string())
    }),
    res: deploymentProposalSchema
  },
  deployApproveProposal: {
    req: z.object({ proposalId: z.string() }),
    res: deploymentProposalSchema
  },
  monitorGetSnapshot: {
    req: z.object({ runId: z.string() }),
    res: monitorSnapshotSchema
  }
} as const;

export type IpcSchemaMap = typeof ipcSchemas;
