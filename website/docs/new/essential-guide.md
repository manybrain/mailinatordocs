---
id: essential-guide
title: Mailinator — essential guide
---

This guide gives a concise overview of Mailinator’s product surface and the common ways teams use it for testing, development, and automation. It is intentionally focused on product-level concepts and links to API/SDK reference material for implementation details.

What Mailinator provides

Mailinator is a testing-first email platform that offers public disposable inboxes, private team domains, programmatic APIs, webhooks, and SDKs. It is designed to make it easy to receive, inspect, and automate handling of inbound messages without relying on real production mailboxes.

Core capabilities

- Public inboxes: freely writable addresses useful for quick experiments and manual testing.
- Private domains: isolated inboxes for teams with access control, API access, and retention settings.
- API and SDKs: programmatic access to list inboxes, read messages, download attachments, fetch SMTP logs, and manage rules and webhooks.
- Webhooks and routing rules: push or transform messages in real time to integrate with CI, alerting systems, or downstream processors.
- SMTP logs and diagnostics: per-message delivery logs that help debug delivery and timing issues.

Common use cases

- UI automation: integration with Selenium, Playwright, Cypress, and similar frameworks to complete email-driven flows such as account verification.
- End-to-end testing: verify message contents, links, attachments, and templates in CI without relying on internal mail systems.
- Monitoring and alerting: forward specific message types to dashboards, Slack, or incident systems via webhooks and rules.
- Vendor debugging: use SMTP transaction logs to compare behavior between sending providers and diagnose delivery problems.

Getting started

For a quick, hands-on walkthrough, see QuickStart.md in this documentation. For programmatic access use the Messages API or one of the official SDKs (see the SDKs page). If you prefer to receive push notifications, configure webhooks and routing rules in your team domain.

Where to go next

- QuickStart — step-by-step API example
- SDKs — official client libraries for common languages
- Webhooks — how to route incoming mail to your systems
- Messages API — reference for message-level operations
