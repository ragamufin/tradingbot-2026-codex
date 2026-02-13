import { describe, expect, it } from 'vitest';

import { DEFAULT_LEGACY_DB_PATH, isLegacyDbPathAvailable } from '../index';

describe('mock-data path detection', () => {
  it('exposes default legacy path', () => {
    expect(DEFAULT_LEGACY_DB_PATH).toContain('/tradingbot-2023/db');
  });

  it('returns boolean for path existence', () => {
    const result = isLegacyDbPathAvailable('/tmp/path-that-should-not-exist-xyz');
    expect(result).toBe(false);
  });
});
