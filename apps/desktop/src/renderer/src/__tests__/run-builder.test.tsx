import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { RunBuilder } from '../components/RunBuilder';

describe('RunBuilder', () => {
  it('creates a run and shows run status', async () => {
    const onCreateRun = vi.fn().mockResolvedValue({
      runId: 'run-123',
      status: 'queued',
      progress: 0
    });

    render(
      <RunBuilder
        datasets={[{ id: '1h::BTC/USDT', ticker: 'BTC/USDT', timeframe: '1h', points: 1000 }]}
        onCreateRun={onCreateRun}
      />
    );

    fireEvent.click(screen.getByText('Create Run'));

    await waitFor(() => {
      expect(onCreateRun).toHaveBeenCalledTimes(1);
      expect(screen.getByTestId('run-status')).toHaveTextContent('run-123');
    });
  });
});
