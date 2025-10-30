# Percy + Cypress Source Code Integration (Sample)

This sample project demonstrates:
- A simple product card UI (public/index.html)
- A Cypress visual test that captures a Percy snapshot
- GitHub Actions workflow to run Percy + Cypress in CI
- Instructions to run baseline (main) and feature branch builds

## Setup

1. Copy the repository into your GitHub account (fork or push).
2. In Percy, create a project and obtain the PERCY_TOKEN.
3. In GitHub repo settings -> Secrets -> Actions, add:
   - `PERCY_TOKEN` = your Percy project token

## Local run (quick)

1. Install dependencies:
   ```bash
   npm ci
   ```
2. Start a static server:
   ```bash
   npm start
   ```
   This serves `public/` at http://localhost:8080
3. Run Percy + Cypress locally:
   ```bash
   # ensure PERCY_TOKEN is set in your shell
   npx percy exec -- npx cypress run --spec "cypress/e2e/visual_test.cy.js"
   ```

## How to follow the assignment steps

1. Push the project to `main` (baseline). Trigger a workflow run — this creates the baseline Percy build.
2. Create a feature branch and modify `public/index.html` (change text, color, or layout).
3. Push the feature branch — workflow runs and Percy creates a second build with visual diffs.
4. Review the changes in the Percy dashboard; approve them if intended.
5. Re-run `main` (push to main) — master baseline should be updated / auto-approved depending on Percy settings.
6. Create another feature branch **without changes** and run CI; Percy should report **No Changes**.

## Notes

- The GitHub Actions workflow expects `PERCY_TOKEN` to be added as a repository secret.
- The workflow serves the `public/` folder using `http-server` prior to running Cypress tests.
- Adjust Cypress version or test details as needed for your environment.

----
Generated for the Percy Source Code Integration assignment.