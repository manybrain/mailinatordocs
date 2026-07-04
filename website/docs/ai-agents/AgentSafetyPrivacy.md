---
id: agent-safety-privacy
title: Agent Safety and Privacy
---

# Agent Safety and Privacy

Mailinator can give AI agents access to email and SMS workflows, but agents should use the right Mailinator surface for the type of data they handle.

## Public inboxes are public

[Public Mailinator inboxes](/documentation/docs/core/publicmailbox/) are readable by anyone. They are useful for quick demos, non-sensitive experiments, and zero-setup tests.

Do not send secrets, production credentials, customer data, private tokens, OTP codes, password reset links, magic links, or sensitive workflow data to Public Mailinator inboxes.

Mailinator may also filter or block messages to Public Mailinator inboxes when required for legal, compliance, or abuse-prevention reasons.

## Use private domains for agent workflows

Use [Mailinator Private Domains](/documentation/docs/core/privatemailbox/) when an AI agent needs to work with:

1. OTP codes.
2. Password reset links.
3. Magic links.
4. Private test users.
5. CI/CD workflow data.
6. Repeatable end-to-end tests.
7. SSO or OIDC test identities.

Private Domains give your team controlled inboxes that are accessible through the Mailinator UI, [API](/documentation/docs/api/), [SDKs](/documentation/docs/sdks/overview/), [CLI](/documentation/docs/ai-agents/mailinator-cli/), [MCP](/documentation/docs/ai-agents/mailinator-mcp/), [webhooks](/documentation/docs/features/webhooks/), and other automation tools.

## Recommended naming patterns

Use predictable inbox names that make agent runs easy to debug:

1. `agent-signup-<run-id>`
2. `agent-password-reset-<run-id>`
3. `agent-otp-<run-id>`
4. `agent-ci-<build-id>`

Avoid reusing one static inbox across many agent runs, especially in parallel test suites.

## Keep humans in control

Configure agents so they only access test inboxes and test domains. Avoid giving agents access to production email, production identity providers, or customer data unless your organization has explicitly approved that workflow.

For examples, see [Agent Recipes](/documentation/docs/ai-agents/agent-recipes/).
