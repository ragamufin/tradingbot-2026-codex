export function fixedNow(): number {
  return 1_700_000_000_000;
}

export function makeRunId(prefix = 'run'): string {
  return `${prefix}-${fixedNow()}`;
}
