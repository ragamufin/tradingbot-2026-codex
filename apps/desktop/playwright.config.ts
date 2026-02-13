import { defineConfig } from '@playwright/test';

const headed = process.env.HEADED === '1';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 45_000,
  retries: 0,
  use: {
    baseURL: 'http://127.0.0.1:5173',
    headless: !headed,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'renderer-browser',
      use: { browserName: 'chromium' }
    }
  ],
  webServer: {
    command: 'npm run dev:renderer --workspace @tradingbot/desktop -- --host 127.0.0.1 --port 5173',
    url: 'http://127.0.0.1:5173',
    timeout: 120_000,
    reuseExistingServer: true
  }
});
