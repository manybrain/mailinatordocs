---
id: automation-sign-in-workflow
title: Automating sign-in workflows with Mailinator
---

Automating end-to-end sign-in or sign-up flows often requires programmatic access to the confirmation email that a system sends. Mailinator is designed for this use case: disposable inboxes exist implicitly (you only need to send to an address), and both the web UI and API let you retrieve message content, links, and attachments for automated tests.

Overview of the approach

Generate or select a unique inbox name for each test run. Use that address when your test user signs up. After the application sends the verification or reset email, fetch the inbox via the Messages API or receive the message via a webhook. Parse the message to extract the verification link and complete the flow by navigating to that link from your automation tool.

Practical notes

Use short-lived addresses to avoid collisions across concurrent tests. For end-to-end UI automation, combine Mailinator with your chosen framework (Selenium, Cypress, Puppeteer, Playwright) to perform the UI interactions, and use the API to assert that the verification email was delivered and contains expected content.

Prefer the API when running tests in headless CI where interacting with the web UI is brittle. Webhooks are appropriate when you want Mailinator to push messages into your system asynchronously, for example to trigger downstream processing or to ensure you do not poll frequently.

Security and test hygiene

Do not reuse inboxes across independent test suites. Keep API tokens in environment variables and avoid embedding secrets in repository code. For private domains, Mailinator provides access controls and team settings so production-like privacy and isolation can be maintained.

Where to look next

See the Quick Start and Messages API reference for concrete examples of fetching messages and extracting links. The SDK pages provide ready-made client libraries for common languages to integrate these steps into your test code.
