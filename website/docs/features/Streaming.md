---
id: streaming
title: Streaming inbox feed
---

If you want to see incoming messages in near real-time you can use Mailinator's [Streaming feed](https://www.mailinator.com/documentation/docs/api/stream-domain-messages/index.html) functionality. The feed uses a websocket-backed stream to show newly received messages without polling or refreshing the page.

## When to use

Use the live feed to observe message throughput during load tests, to visually verify that messages are arriving during a test run, or to see Mailinator’s ingest capacity. Streaming can also help tests and [AI agents](/documentation/docs/category/ai-agents/) wait for new messages without repeatedly polling. The feed is read-only and does not expose full message content; it is intended as an operational view rather than an inspection tool.

Streaming is a good fit when you want to observe message arrival in near real-time. If you need to inspect message bodies, extract links, read OTP codes, or make assertions in a test, use the [Messages API](/documentation/docs/api/) or an [SDK](/documentation/docs/sdks/overview/) after the message arrives.

## Streaming vs polling vs webhooks

Use the option that matches your workflow:

1. **Streaming** - Best for watching incoming messages in near real-time during a test run, load test, or operational check.
2. **Polling** - Best for test automation that waits for a specific email or SMS, then fetches message content through the API.
3. **Webhooks** - Best when another system should push data into Mailinator or when you want event-driven workflows around incoming payloads.

## How it works

The inbox UI subscribes to a websocket channel and receives a lightweight summary for every message that lands. Messages appear almost instantly, and you can pause the feed to stop updates while you inspect results. 

## Related

For programmatic access, use the [Messages API](https://www.mailinator.com/documentation/docs/api/stream-domain-messages/index.html) and [Webhooks](/documentation/docs/features/webhooks/). 

Check our [SDK Overview](/documentation/docs/sdks/overview/) for libraries that support the streaming feed and other API functionality.
