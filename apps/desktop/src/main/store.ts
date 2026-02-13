import type { DeploymentProposal, RunStatus } from '@tradingbot/core-types';

export class InMemoryStore {
  private readonly runStatuses = new Map<string, RunStatus>();
  private readonly proposals = new Map<string, DeploymentProposal>();

  setRunStatus(status: RunStatus): void {
    this.runStatuses.set(status.runId, status);
  }

  getRunStatus(runId: string): RunStatus | undefined {
    return this.runStatuses.get(runId);
  }

  setProposal(proposal: DeploymentProposal): void {
    this.proposals.set(proposal.id, proposal);
  }

  getProposal(proposalId: string): DeploymentProposal | undefined {
    return this.proposals.get(proposalId);
  }
}

export const store = new InMemoryStore();
