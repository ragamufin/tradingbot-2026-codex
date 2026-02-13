# Testing Strategy

## Layers
1. Unit tests: schemas, type guards, utilities, state containers.
2. Integration tests: IPC/service/store interactions and mock-data adapter.
3. UI component tests: renderer components with realistic user actions.
4. Playwright E2E: browser-mode renderer workflows (headless by default).

## Commands
- `npm test`: full suite (headless by default).
- `npm run test:headed`: headed E2E mode.
- `npm run test:unit`
- `npm run test:integration`
- `npm run test:e2e`

## Data Hygiene
1. Prefer extending shared fixtures/factories.
2. Avoid test data coupling across unrelated features.
3. Integration tests that need legacy DB path should be conditionally skipped if path is unavailable.

## Future Transition
When real providers are introduced:
1. Provider integration and E2E tests move to real data only for that provider scope.
2. Mock adapters remain for deterministic UI regression tests.

