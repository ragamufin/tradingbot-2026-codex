# Architecture

## Monorepo Layout
- `apps/desktop`: Electron Strategy Studio (main/preload/renderer).
- `apps/ops`: Monitoring shell.
- `packages/core-types`: shared domain + IPC schemas.
- `packages/ui-kit`: shared UI primitives.
- `packages/mock-data`: legacy DB adapters and normalization.
- `packages/test-utils`: reusable test helpers.
- `packages/config`: shared config artifacts.

## Process Boundaries
1. Main process owns filesystem/protocol access and IPC handlers.
2. Preload exposes typed APIs.
3. Renderer consumes APIs and remains Node-free.

## Data Flow (Phase 1)
1. Renderer requests dataset metadata and series through IPC.
2. Main process validates payloads with schemas.
3. Mock-data package reads legacy PouchDB path and normalizes OHLCV.
4. Renderer updates Strategy Studio views and chart panel.

## Deployment Flow (Phase 1)
1. User creates deployment proposal via UI.
2. Proposal is stored and rendered with diff/summary.
3. Explicit UI approval marks proposal approved.
4. No implicit auto-deploy actions.

