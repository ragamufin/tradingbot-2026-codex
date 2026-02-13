import { Card } from '@tradingbot/ui-kit';

export function OpsApp() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-2xl font-semibold text-slate-900">Tradingbot Ops Monitor</h1>
      <p className="mt-2 text-sm text-slate-600">Phase 1 shell for monitoring deployed strategy runs.</p>
      <Card className="mt-6 p-4">
        <h2 className="text-lg font-medium">Live Snapshot (Mock)</h2>
        <p className="mt-2 text-sm">Status: idle</p>
        <p className="text-sm">PnL (USD): 0.00</p>
      </Card>
    </main>
  );
}
