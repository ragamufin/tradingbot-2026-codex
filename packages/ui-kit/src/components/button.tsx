import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '../lib/cn';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: 'default' | 'secondary' | 'destructive';
};

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:pointer-events-none disabled:opacity-50',
        variant === 'default' && 'bg-sky-600 text-white hover:bg-sky-500',
        variant === 'secondary' && 'bg-slate-200 text-slate-900 hover:bg-slate-300',
        variant === 'destructive' && 'bg-rose-600 text-white hover:bg-rose-500',
        className
      )}
      {...props}
    />
  );
}
