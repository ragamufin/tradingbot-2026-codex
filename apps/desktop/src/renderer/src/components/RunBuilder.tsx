import { useMemo, useState } from 'react';

import { Button, Card } from '@tradingbot/ui-kit';
import type { BacktestRunSpec, DatasetInfo, RunStatus } from '@tradingbot/core-types';

type Props = {
  datasets: DatasetInfo[];
  onCreateRun: (spec: BacktestRunSpec) => Promise<RunStatus>;
  onDatasetSelected?: (datasetId: string) => void;
};

export function RunBuilder({ datasets, onCreateRun, onDatasetSelected }: Props) {
  const [selected, setSelected] = useState<string>('');
  const [runStatus, setRunStatus] = useState<RunStatus | null>(null);

  const firstDataset = useMemo(() => datasets[0], [datasets]);

  const createRun = async () => {
    const dataset = selected || firstDataset?.id;
    if (!dataset) return;

    const [, ticker] = dataset.split('::');
    const spec: BacktestRunSpec = {
      id: `run-${Date.now()}`,
      strategyIds: ['mean-reversion-mock'],
      assets: [ticker ?? 'BTC/USDT'],
      timeRange: { from: Date.now() - 7 * 24 * 60 * 60 * 1000, to: Date.now() },
      rebalanceMode: 'none',
      runMode: 'single'
    };

    setRunStatus(await onCreateRun(spec));
  };

  return (
    <Card className="p-4">
      <h3 className="text-base font-semibold">Backtest Run Builder</h3>
      <label className="mt-3 block text-sm font-medium" htmlFor="dataset-select">
        Dataset
      </label>
      <select
        id="dataset-select"
        className="mt-1 w-full rounded-md border border-slate-300 bg-white px-2 py-2 text-sm"
        value={selected}
        onChange={(event) => {
          setSelected(event.target.value);
          onDatasetSelected?.(event.target.value);
        }}
      >
        {datasets.map((dataset) => (
          <option key={dataset.id} value={dataset.id}>
            {dataset.id}
          </option>
        ))}
      </select>
      <Button className="mt-3" onClick={createRun}>
        Create Run
      </Button>
      {runStatus && (
        <p className="mt-3 text-sm" data-testid="run-status">
          Run {runStatus.runId}: {runStatus.status} ({runStatus.progress}%)
        </p>
      )}
    </Card>
  );
}
