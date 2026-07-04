---
id: streaming
title: Streaming inbox feed
---

If you want to see incoming messages in near real-time you can use Mailinator's [Streaming feed](https://www.mailinator.com/documentation/docs/api/stream-domain-messages/index.html) functionality. The feed uses a websocket-backed stream to show newly received messages without polling or refreshing the page.

## When to use

Use the live feed to observe message throughput during load tests, to visually verify that messages are arriving during a test run, or to see Mailinator’s ingest capacity. Streaming can also help tests and [AI agents](/documentation/docs/category/ai-agents/) wait for new messages without repeatedly polling. The feed is read-only and does not expose full message content; it is intended as an operational view rather than an inspection tool.

## How it works

The inbox UI subscribes to a websocket channel and receives a lightweight summary for every message that lands. Messages appear almost instantly, and you can pause the feed to stop updates while you inspect results. 

## Related

For programmatic access, use the [Messages API](https://www.mailinator.com/documentation/docs/api/stream-domain-messages/index.html) and [Webhooks](/documentation/docs/features/webhooks/). 

Check our [SDK Overview](/documentation/docs/sdks/overview/) for libraries that support the streaming feed and other API functionality.
