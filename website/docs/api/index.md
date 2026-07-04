---
id: intro
title: Overview
---

# API Overview

## The Mailinator API

The Mailinator API provides programmatic access to the Mailinator system. This includes fetching and injecting messages into the Mailinator system and creating routing rules for specific message domains within the system. The API is the foundation for [test automation](/documentation/docs/category/test-automation/), [SDKs](/documentation/docs/sdks/overview/), [CLI](/documentation/docs/ai-agents/mailinator-cli/), [MCP](/documentation/docs/ai-agents/mailinator-mcp/), and [AI-agent workflows](/documentation/docs/category/ai-agents/).&#x20;

Messages are typically (and historically) email messages. Hence the format of messages tend to look like emails but in reality any message can be fed, routed, and read or delivered through the system. In a broader scope messages generally arrive via email, SMS, or direct HTTP Post.

Subscribers can read messages in both the **Public** and their own **Private** Mailinator email systems with the API. They may also route/inject messages but only to their [Private Mailinator domains](/documentation/docs/core/privatemailbox/).

Access to the API (and messages in general) are subject to your subscription plan's rate limits.

### Messages

Messages within Mailinator are typically thought of as emails - however, messages can enter the system in a variety of ways including email, SMS, or HTTP Post. In general, the schema of messages contains a TO, FROM, SUBJECT, and message body. Message bodies can be simple string of text or - as is allowed by email standards, a complicated multi-part, multi-encoded schema.

### Domains

Domains identify a specific source for messages. Emails automatically are assigned to the domain of their "to" address. Expectedly, each of your Private Domains represent a specific source for messages. Each Domain may have it's own set of rules.

For event-driven automation, see [Webhooks](/documentation/docs/features/webhooks/) and [Streaming inbox feed](/documentation/docs/features/streaming/). For SSO testing, see [Mailinator Universal IDP](/documentation/docs/features/universal-idp/).
