import type { PlaywrightTestConfig } from '@playwright/test';

const headed = process.env.HEADED === '1';

export const sharedPlaywrightConfig: Partial<PlaywrightTestConfig> = {
  timeout: 30_000,
  use: {
    headless: !headed,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]]
};
