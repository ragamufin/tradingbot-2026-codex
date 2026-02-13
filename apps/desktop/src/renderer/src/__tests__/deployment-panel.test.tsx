import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { DeploymentPanel } from '../components/DeploymentPanel';

describe('DeploymentPanel', () => {
  it('creates and approves a proposal', async () => {
    const onCreate = vi.fn().mockResolvedValue({
      id: 'proposal-xyz',
      targetEnvironment: 'paper',
      deploymentMode: 'isolated',
      summary: 'summary',
      changes: [],
      approved: false
    });

    const onApprove = vi.fn().mockResolvedValue({
      id: 'proposal-xyz',
      targetEnvironment: 'paper',
      deploymentMode: 'isolated',
      summary: 'summary',
      changes: [],
      approved: true
    });

    render(<DeploymentPanel onCreate={onCreate} onApprove={onApprove} />);

    fireEvent.click(screen.getByText('Create Proposal'));
    await waitFor(() => expect(onCreate).toHaveBeenCalledTimes(1));

    fireEvent.click(screen.getByText('Approve Proposal'));
    await waitFor(() => expect(onApprove).toHaveBeenCalledWith('proposal-xyz'));

    expect(screen.getByTestId('proposal-result')).toHaveTextContent('Approved: yes');
  });
});
