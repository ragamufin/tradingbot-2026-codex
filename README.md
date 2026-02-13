# tradingbot-2026-codex

Desktop-first Strategy OS bootstrap for trading strategy development, testing, deployment proposals, and monitoring.

## Stack
- Electron + React + TypeScript (`apps/desktop`)
- React + Vite monitoring shell (`apps/ops`)
- Tailwind + shared UI kit
- Typed IPC contracts with schema validation (`packages/core-types`)
- Legacy PouchDB mock data adapter (`packages/mock-data`)
- Vitest + Testing Library + Playwright

## Quick Start
```bash
npm install
npm run dev:desktop
```

## Tests
```bash
npm test
npm run test:headed
```

## Notes
- Mock data source defaults to:
  `/Users/rude/Documents/Projects/trade/crypto/tradingbot-2023/db`
- TradingView library defaults to:
  `/Users/rude/Documents/Work/tradingview_charting_library`

Override paths with env vars:
- `LEGACY_DB_PATH`
- `TRADINGVIEW_LIB_PATH`

## Governance
Project guardrails and implementation rules live in:
- `AGENTS.md`
- `ARCHITECTURE.md`
- `TESTING.md`
