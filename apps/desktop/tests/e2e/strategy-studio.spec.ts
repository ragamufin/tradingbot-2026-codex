import { expect, test } from '@playwright/test';

test('renders desktop strategy studio shell in browser mode', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('Tradingbot 2026 Strategy Studio')).toBeVisible();
  await expect(page.getByText('Strategy Config Draft')).toBeVisible();
  await expect(page.getByText('Backtest Run Builder')).toBeVisible();
});
