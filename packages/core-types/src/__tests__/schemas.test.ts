import { describe, expect, it } from 'vitest';

import { backtestRunSpecSchema, channelNames, strategyConfigDraftSchema } from '../index';

describe('core schema contracts', () => {
  it('has all required channels', () => {
    expect(channelNames).toContain('app:getVersion');
    expect(channelNames).toContain('monitor:getSnapshot');
  });

  it('validates backtest run spec', () => {
    const parsed = backtestRunSpecSchema.parse({
      id: 'run-1',
      strategyIds: ['s1'],
      assets: ['BTC/USDT'],
      timeRange: { from: 1700000000000, to: 1710000000000 },
      rebalanceMode: 'equal-weight',
      runMode: 'multi'
    });

    expect(parsed.assets[0]).toBe('BTC/USDT');
  });

  it('rejects empty strategy lists', () => {
    const result = backtestRunSpecSchema.safeParse({
      id: 'run-2',
      strategyIds: [],
      assets: ['ETH/USDT'],
      timeRange: { from: 1, to: 2 },
      rebalanceMode: 'none',
      runMode: 'single'
    });

    expect(result.success).toBe(false);
  });

  it('accepts strategy config draft', () => {
    const result = strategyConfigDraftSchema.safeParse({
      strategyId: 'mean-reversion',
      params: { atrPeriod: 14, enabled: true },
      valid: true,
      provenance: { source: 'manual', updatedAt: Date.now() }
    });

    expect(result.success).toBe(true);
  });
});
