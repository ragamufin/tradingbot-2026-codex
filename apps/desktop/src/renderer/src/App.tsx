import { useEffect, useMemo, useState } from 'react';

import type { DatasetInfo, DeploymentProposal, RunStatus } from '@tradingbot/core-types';
import { Button } from '@tradingbot/ui-kit';

import { DeploymentPanel } from './components/DeploymentPanel';
import { RunBuilder } from './components/RunBuilder';
import { StrategyConfigPanel } from './components/StrategyConfigPanel';
import { TestRunHistory } from './components/TestRunHistory';
import { TradingViewChart } from './components/TradingViewChart';
import { DEFAULT_LEGACY_DB_PATH } from './lib/defaults';

type Route = 'strategy-studio' | 'monitoring';

export function App() {
  const [route, setRoute] = useState<Route>('strategy-studio');
  const [datasets, setDatasets] = useState<DatasetInfo[]>([]);
  const [runs, setRuns] = useState<RunStatus[]>([]);
  const [selectedDataset, setSelectedDataset] = useState<string>('');
  const [latestProposal, setLatestProposal] = useState<DeploymentProposal | null>(null);

  useEffect(() => {
    void window.tradingbot.listDatasets(DEFAULT_LEGACY_DB_PATH).then((result) => {
      setDatasets(result);
      setSelectedDataset(result[0]?.id ?? '');
    });
  }, []);

  const onCreateRun = async (spec: unknown) => {
    const created = await window.tradingbot.createRun(spec);
    const latest = await window.tradingbot.getRunStatus(created.runId);
    setRuns((prev) => [latest, ...prev].slice(0, 20));
    return latest;
  };

  const appHeader = useMemo(
    () => (
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
        <div>
          <h1 className="text-xl font-semibold">Tradingbot 2026 Strategy Studio</h1>
          <p className="text-xs text-slate-500">Desktop-first UI/UX with typed IPC and mock-market data.</p>
        </div>
        <nav className="flex gap-2">
          <Button variant={route === 'strategy-studio' ? 'default' : 'secondary'} onClick={() => setRoute('strategy-studio')}>
            Strategy Studio
          </Button>
          <Button variant={route === 'monitoring' ? 'default' : 'secondary'} onClick={() => setRoute('monitoring')}>
            Monitoring
          </Button>
        </nav>
      </header>
    ),
    [route]
  );

  if (route === 'monitoring') {
    return (
      <div className="min-h-screen">
        {appHeader}
        <main className="p-4">
          <h2 className="text-lg font-semibold">Monitoring (Phase E shell)</h2>
          <p className="text-sm text-slate-600">Latest proposal: {latestProposal ? latestProposal.id : 'none'}</p>
          <TestRunHistory runs={runs} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {appHeader}
      <main className="grid grid-cols-12 gap-4 p-4">
        <section className="col-span-8 space-y-4">
          <TradingViewChart title={selectedDataset || 'TradingView Local Chart'} />
          <TestRunHistory runs={runs} />
        </section>

        <section className="col-span-4 space-y-4">
          <StrategyConfigPanel onValidate={(draft) => window.tradingbot.validateConfig(draft)} />
          <RunBuilder datasets={datasets} onCreateRun={onCreateRun} />
          <DeploymentPanel
            onCreate={async (input) => {
              const proposal = await window.tradingbot.createProposal(input);
              setLatestProposal(proposal);
              return proposal;
            }}
            onApprove={async (proposalId) => {
              const proposal = await window.tradingbot.approveProposal(proposalId);
              setLatestProposal(proposal);
              return proposal;
            }}
          />
        </section>
      </main>
    </div>
  );
}
