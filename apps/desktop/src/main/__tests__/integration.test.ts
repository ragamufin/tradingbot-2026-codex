import { describe, expect, it } from 'vitest';

import { InMemoryStore } from '../store';

describe('InMemoryStore', () => {
  it('stores run statuses and deployment proposals', () => {
    const store = new InMemoryStore();

    store.setRunStatus({ runId: 'run-123', status: 'queued', progress: 0 });
    store.setProposal({
      id: 'proposal-123',
      targetEnvironment: 'paper',
      deploymentMode: 'isolated',
      summary: 'summary',
      changes: [],
      approved: false
    });

    expect(store.getRunStatus('run-123')?.status).toBe('queued');
    expect(store.getProposal('proposal-123')?.approved).toBe(false);
  });
});
