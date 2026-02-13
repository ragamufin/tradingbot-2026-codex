# AGENTS.md

## Mission
Build a desktop-first strategy development operating system for rapid, safe experimentation of multi-strategy trading workflows.

## Core Principles
1. Desktop UI/UX first (Electron), web/mobile later.
2. Mock data first for UI/UX iteration; real provider data only once provider implementation starts.
3. Every shipped task includes tests; extend existing test suites where possible to avoid fragmented, polluted fixtures.
4. Keep strategy, risk, and deployment flows explicit and auditable.

## Non-Negotiable Technical Rules
1. Use `import` syntax by default.
2. **CCXT imports must use `require`** when introduced.
3. `protobufjs` is required for CCXT compatibility and must remain in dependencies.
4. Never add `ccxt.pro` as a separate package (bundled with CCXT).
5. Use `gh` for GitHub operations.

## Testing Rules
1. Unit + integration + UI coverage is required for each implemented capability.
2. Prefer extending existing tests over creating isolated one-off feature tests.
3. Browser-based tests that need real browser behavior must use Playwright CLI.
4. Default test mode must not steal focus; headed mode is opt-in.

## Security Rules
1. Electron renderer must not access Node APIs directly.
2. Expose capabilities only through preload + typed IPC boundaries.
3. Keep `contextIsolation: true`, `nodeIntegration: false`, and `sandbox: true` where compatible.
4. Keep CSP strict and allowlist only required local protocols/resources.

