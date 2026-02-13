import { randomUUID } from 'node:crypto';

import { ipcMain } from 'electron';

import {
  deploymentProposalSchema,
  ipcSchemas,
  monitorSnapshotSchema,
  runStatusSchema,
  strategyConfigDraftSchema,
  type DeploymentProposal,
  type RunStatus
} from '@tradingbot/core-types';
import { listDatasets, loadSeries } from '@tradingbot/mock-data';

import { store } from './store';

function validate<T>(schema: { parse: (value: unknown) => T }, payload: unknown): T {
  return schema.parse(payload);
}

export function registerIpcHandlers(): void {
  ipcMain.handle('app:getVersion', async () => {
    return validate(ipcSchemas.appGetVersion.res, { version: '0.1.0' });
  });

  ipcMain.handle('mockData:listDatasets', async (_event, payload) => {
    const req = validate(ipcSchemas.mockDataListDatasets.req, payload);
    const datasets = await listDatasets(req.legacyDbPath);
    return validate(ipcSchemas.mockDataListDatasets.res, datasets);
  });

  ipcMain.handle('mockData:loadSeries', async (_event, payload) => {
    const req = validate(ipcSchemas.mockDataLoadSeries.req, payload);
    const series = await loadSeries({
      legacyDbPath: req.legacyDbPath,
      datasetId: req.datasetId,
      limit: req.limit
    });
    return validate(ipcSchemas.mockDataLoadSeries.res, series);
  });

  ipcMain.handle('strategy:validateConfig', async (_event, payload) => {
    const draft = validate(strategyConfigDraftSchema, payload);
    const errors: string[] = [];

    if (Object.keys(draft.params).length === 0) {
      errors.push('Strategy params cannot be empty.');
    }

    return validate(ipcSchemas.strategyValidateConfig.res, {
      valid: errors.length === 0,
      errors
    });
  });

  ipcMain.handle('backtest:createRun', async (_event, payload) => {
    const spec = validate(ipcSchemas.backtestCreateRun.req, payload);
    const runStatus: RunStatus = runStatusSchema.parse({
      runId: spec.id,
      status: 'queued',
      progress: 0
    });

    store.setRunStatus(runStatus);

    queueMicrotask(() => {
      store.setRunStatus(runStatusSchema.parse({ runId: spec.id, status: 'completed', progress: 100 }));
    });

    return runStatus;
  });

  ipcMain.handle('backtest:getRunStatus', async (_event, payload) => {
    const req = validate(ipcSchemas.backtestGetRunStatus.req, payload);
    const status = store.getRunStatus(req.runId);
    if (!status) {
      return validate(ipcSchemas.backtestGetRunStatus.res, {
        runId: req.runId,
        status: 'failed',
        progress: 0
      });
    }

    return validate(ipcSchemas.backtestGetRunStatus.res, status);
  });

  ipcMain.handle('deploy:createProposal', async (_event, payload) => {
    const req = validate(ipcSchemas.deployCreateProposal.req, payload);
    const proposal: DeploymentProposal = deploymentProposalSchema.parse({
      id: randomUUID(),
      targetEnvironment: req.targetEnvironment,
      deploymentMode: req.deploymentMode,
      summary: req.summary,
      changes: req.changes,
      approved: false
    });

    store.setProposal(proposal);
    return validate(ipcSchemas.deployCreateProposal.res, proposal);
  });

  ipcMain.handle('deploy:approveProposal', async (_event, payload) => {
    const req = validate(ipcSchemas.deployApproveProposal.req, payload);
    const existing = store.getProposal(req.proposalId);
    if (!existing) {
      throw new Error(`Proposal ${req.proposalId} not found`);
    }

    const approved = deploymentProposalSchema.parse({ ...existing, approved: true });
    store.setProposal(approved);
    return validate(ipcSchemas.deployApproveProposal.res, approved);
  });

  ipcMain.handle('monitor:getSnapshot', async (_event, payload) => {
    const req = validate(ipcSchemas.monitorGetSnapshot.req, payload);

    return monitorSnapshotSchema.parse({
      runId: req.runId,
      status: 'idle',
      pnlUsd: 0,
      health: 'healthy',
      alerts: []
    });
  });
}
