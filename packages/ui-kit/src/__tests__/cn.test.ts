import { describe, expect, it } from 'vitest';

import { cn } from '../lib/cn';

describe('cn utility', () => {
  it('merges classes with tailwind conflict resolution', () => {
    expect(cn('p-2', 'p-4', false && 'hidden')).toBe('p-4');
  });
});
