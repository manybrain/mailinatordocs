---
id: testing-with-selenium
title: Testing with Selenium and Mailinator
---

This short product-level note explains how to combine Mailinator with UI automation frameworks such as Selenium to reliably test email-driven flows.

Why Mailinator helps

Mailinator provides implicitly available inboxes so tests do not need to create addresses. Send the verification or notification email to a unique inbox name per test run and use the API or webhooks to retrieve the message programmatically. This avoids brittle manual intervention and reduces test flakiness.

Recommended approach

Use your automation framework to perform UI interactions up to the point where the system sends an email. Generate or choose an inbox name, then either poll the Messages API for the new message or configure a webhook to push the incoming message to your test runner. Extract the verification link or code and continue the automated flow inside your test.

Notes on tooling

The same pattern works with Cypress, Playwright, Puppeteer, and other tools. Prefer API-based assertions when running in headless CI to avoid depending on any web UI scraping. If you need sample automation code, see the Automating sign-in workflows document in this folder.
