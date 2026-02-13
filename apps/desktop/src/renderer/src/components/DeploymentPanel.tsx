import { useState } from 'react';

import { Button, Card } from '@tradingbot/ui-kit';
import type { DeploymentProposal } from '@tradingbot/core-types';

type Props = {
  onCreate: (input: {
    targetEnvironment: 'paper' | 'live';
    deploymentMode: 'isolated' | 'existing';
    summary: string;
    changes: string[];
  }) => Promise<DeploymentProposal>;
  onApprove: (proposalId: string) => Promise<DeploymentProposal>;
};

export function DeploymentPanel({ onCreate, onApprove }: Props) {
  const [proposal, setProposal] = useState<DeploymentProposal | null>(null);

  const createProposal = async () => {
    const created = await onCreate({
      targetEnvironment: 'paper',
      deploymentMode: 'isolated',
      summary: 'Deploy Strategy Studio mock run flow',
      changes: ['Enable mock run execution', 'Attach monitoring snapshot panel']
    });

    setProposal(created);
  };

  const approveProposal = async () => {
    if (!proposal) return;
    setProposal(await onApprove(proposal.id));
  };

  return (
    <Card className="p-4">
      <h3 className="text-base font-semibold">Deployment Proposal</h3>
      <p className="mt-2 text-sm text-slate-600">
        Chat creates a proposal and UI requires explicit approval before deployment takes effect.
      </p>
      <div className="mt-3 flex gap-2">
        <Button onClick={createProposal}>Create Proposal</Button>
        <Button variant="secondary" onClick={approveProposal} disabled={!proposal || proposal.approved}>
          Approve Proposal
        </Button>
      </div>
      {proposal && (
        <div className="mt-3 text-sm" data-testid="proposal-result">
          <p>
            Proposal {proposal.id} ({proposal.targetEnvironment}/{proposal.deploymentMode})
          </p>
          <p>Approved: {proposal.approved ? 'yes' : 'no'}</p>
        </div>
      )}
    </Card>
  );
}
