import { Card } from '@tradingbot/ui-kit';
import type { RunStatus } from '@tradingbot/core-types';

type Props = {
  runs: RunStatus[];
};

export function TestRunHistory({ runs }: Props) {
  return (
    <Card className="p-4">
      <h3 className="text-base font-semibold">Test Run History</h3>
      <ul className="mt-2 space-y-1 text-sm">
        {runs.length === 0 && <li>No runs yet.</li>}
        {runs.map((run) => (
          <li key={run.runId}>
            {run.runId}: {run.status} ({run.progress}%)
          </li>
        ))}
      </ul>
    </Card>
  );
}
