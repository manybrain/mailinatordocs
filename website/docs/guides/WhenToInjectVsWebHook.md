---
id: inject-webhook
title: When to inject a message vs use a Webhook
---

# When to inject a message vs use a Webhook

From Google:

Injecting a message (often via a dedicated API call like Slack's chat.postMessage) offers more control, functionality, and security (e.g., updating messages, specific channels, complex interactions) than a standard webhook, which is simpler, event-driven, and resource-efficient for just "firing and forgetting" notifications (e.g., alerts) but lacks complex features and has security considerations due to publicly exposed URLs. Use APIs (injection) for complex, stateful integrations; use webhooks for simple, real-time event notifications

Me:

1. Typically you inject a message using a private system. Where you can hide your API Key.
2. Webhooks are more public and don't risk any security problems.