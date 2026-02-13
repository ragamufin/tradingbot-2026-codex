import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { OpsApp } from '../ops-app';

describe('OpsApp', () => {
  it('renders monitoring shell', () => {
    render(<OpsApp />);
    expect(screen.getByText('Tradingbot Ops Monitor')).toBeInTheDocument();
    expect(screen.getByText('Status: idle')).toBeInTheDocument();
  });
});
