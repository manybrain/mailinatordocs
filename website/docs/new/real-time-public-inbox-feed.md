---
id: real-time-public-inbox-feed
title: Real-time public inbox feed
---

See incoming public messages in near real-time using Mailinator’s live feed. The feed uses a websocket-backed stream to show newly received messages without polling or refreshing the page.

When to use

Use the live feed to observe message throughput during load tests, to visually verify that messages are arriving during a test run, or to demo Mailinator’s ingest capacity. The feed is read-only and does not expose full message content for public safety; it is intended as an operational view rather than an inspection tool.

How it works

The inbox UI subscribes to a websocket channel and receives a lightweight summary for every message that lands. Messages appear almost instantly, and you can pause the feed to stop updates while you inspect results. For private domains (subscribers) the same realtime architecture is available for your private inboxes and integrates with API/Webhook features.

Related

For programmatic access, use the Messages API and Webhooks. See the Webhooks documentation to forward incoming messages to your systems, or the Messages API to fetch full message details.
