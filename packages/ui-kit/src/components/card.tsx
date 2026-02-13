import type { HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '../lib/cn';

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-lg border border-slate-200 bg-white text-slate-900 shadow-sm', className)}
      {...props}
    />
  );
}
