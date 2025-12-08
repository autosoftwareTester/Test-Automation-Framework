# Copilot / AI Agent Instructions for Test-Automation-Framework

This file gives concise, actionable context for AI coding agents working in this repository.

Overview
- **Framework:** Playwright test runner (dev dependency `@playwright/test` in `package.json`).
- **Language:** TypeScript tests under the `tests/` directory (see `tests/example.spec.ts`).
- **Config:** `playwright.config.ts` is the single source of truth for test directory, reporters, projects and shared `use` settings.

Key patterns & examples
- Tests live in `tests/` and use the Playwright test fixture style: `import { test, expect } from '@playwright/test'`.
- Example selectors: `page.getByRole('link', { name: 'Get started' })` and `await expect(page).toHaveTitle(/Playwright/);` (see `tests/example.spec.ts`).
- Browser matrix is configured via `projects` in `playwright.config.ts` (chromium / firefox / webkit).

Developer workflows (concrete commands)
- Run tests locally (recommended):
  - `npx playwright test` (runs all tests)
  - `npx playwright test tests/example.spec.ts` (single file)
  - `npx playwright test --headed` (headed mode)
- Install node deps and Playwright browsers:
  - `npm install`
  - `npx playwright install` (downloads browser binaries)
- View HTML report after a run:
  - `npx playwright show-report`

Project-specific conventions
- `testDir` is `./tests` in `playwright.config.ts`. Place new test files there.
- The config sets `trace: 'on-first-retry'` and `reporter: 'html'` — preserve these values unless you intentionally change retry/trace/report behaviour.
- `forbidOnly: !!process.env.CI` is enabled in the config; CI should set `CI=true` so `test.only` causes a failure. Do not leave accidental `test.only` in commits.
- The `webServer` and `dotenv` usage are present but commented out; if adding a web app test, wire those in and document new env variables in the repo README.

What AI agents should do first
- Inspect `playwright.config.ts` before changing test runner behavior — it controls retries, workers, projects and traces.
- Run the tests locally with `npx playwright test` after edits. If browsers are missing, run `npx playwright install` first.
- When adding scripts, update `package.json` `scripts` (there are currently no scripts). Example:
  ```json
  "scripts": {
    "test": "playwright test",
    "test:headed": "playwright test --headed",
    "report": "playwright show-report"
  }
  ```

Editing guidance & examples
- Keep Playwright idioms: use fixtures (`page`, `browser`, etc.), `getByRole` and accessibility-oriented selectors where possible.
- For cross-browser checks, rely on the `projects` configuration rather than ad-hoc loops.
- When adding new environment variables, follow the commented `dotenv` pattern at the top of `playwright.config.ts` and document them in `README.md`.

Integration points & external deps
- Dev deps: `@playwright/test`, `@types/node`. No server code lives here; tests are end-to-end against external URLs by default.
- CI expectations: set `CI=true` to enable `forbidOnly` and retries behavior.

If anything in this file is unclear or you need other examples (CI config, README updates, or sample scripts), tell me which section to expand or correct.
