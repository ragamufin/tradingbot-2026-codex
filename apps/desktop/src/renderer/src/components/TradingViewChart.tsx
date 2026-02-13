import { Card } from '@tradingbot/ui-kit';

type Props = {
  title: string;
};

export function TradingViewChart({ title }: Props) {
  return (
    <Card className="h-[420px] overflow-hidden">
      <div className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium">{title}</div>
      <iframe
        title="TradingView Local Chart"
        src="tv:/test.html"
        className="h-[calc(100%-37px)] w-full border-0"
        sandbox="allow-scripts allow-same-origin"
      />
    </Card>
  );
}
