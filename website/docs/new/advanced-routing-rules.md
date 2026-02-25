---
id: advanced-routing-rules
title: Advanced routing rules
---

Advanced routing rules let you inspect incoming messages and take automated actions so your team can process, transform, or discard messages without manual steps.

Conditions are evaluated against message fields such as To, From, Subject, and the originating IP address. Combine conditions using "all" (logical AND) or "any" (logical OR) to precisely target messages. For example, a rule that looks for "otp" in the subject can be used to locate one-time-password emails and then click all links in the message automatically.

Actions determine what happens when a rule matches. A rule can click links, forward a copy to a webhook, or Drop the message so it is not stored. Rules execute in priority order; a higher-priority rule can modify or forward a message before a later rule drops it. This behavior enables workflows such as clicking links in an OTP email and then dropping the message to keep storage clean.

Use webhooks to route matched messages to external services for analysis, alerting, or storage. When you configure a webhook action, choose whether the rule should trigger only when all conditions match or when any condition matches. If you want to keep a copy in Mailinator while also forwarding it, do not add a subsequent Drop action.

You can also filter by IP using comparators like ENDS_WITH to ignore or discard messages from specific senders.

Where to find it

Routing rules are configured in your team domain settings. For API-driven workflows see the Message Rules and Webhooks reference in the API docs.

Questions or ideas for new rules can be emailed to support@manybrain.com.
