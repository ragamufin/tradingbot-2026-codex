import { useState } from 'react';

import { Button, Card } from '@tradingbot/ui-kit';
import type { StrategyConfigDraft } from '@tradingbot/core-types';

type Props = {
  onValidate: (draft: StrategyConfigDraft) => Promise<{ valid: boolean; errors: string[] }>;
};

export function StrategyConfigPanel({ onValidate }: Props) {
  const [atrPeriod, setAtrPeriod] = useState('14');
  const [enabled, setEnabled] = useState(true);
  const [validationResult, setValidationResult] = useState<{ valid: boolean; errors: string[] } | null>(null);

  const validate = async () => {
    const draft: StrategyConfigDraft = {
      strategyId: 'mean-reversion-mock',
      params: {
        atrPeriod: Number(atrPeriod),
        enabled
      },
      valid: true,
      provenance: { source: 'manual', updatedAt: Date.now() }
    };

    setValidationResult(await onValidate(draft));
  };

  return (
    <Card className="p-4">
      <h3 className="text-base font-semibold">Strategy Config Draft</h3>
      <div className="mt-3 grid gap-3">
        <label className="text-sm font-medium" htmlFor="atr-period">
          ATR Period
          <input
            id="atr-period"
            className="mt-1 w-full rounded-md border border-slate-300 px-2 py-2 text-sm"
            value={atrPeriod}
            onChange={(event) => setAtrPeriod(event.target.value)}
          />
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={enabled} onChange={(event) => setEnabled(event.target.checked)} />
          Enabled
        </label>
      </div>
      <Button className="mt-3" onClick={validate}>
        Validate Config
      </Button>
      {validationResult && (
        <p className="mt-3 text-sm" data-testid="validation-result">
          {validationResult.valid ? 'Valid config' : `Invalid: ${validationResult.errors.join(', ')}`}
        </p>
      )}
    </Card>
  );
}
