---
id: smtp-logs
title: SMTP transaction logs
---

Every incoming message stored by Mailinator includes the SMTP transaction log produced during delivery. The SMTP log captures the SMTP conversation between the sending server and Mailinator, including protocol-level commands, response codes, and per-step timing information in milliseconds. This data is useful for debugging delivery failures, diagnosing slow relays, and comparing behavior across sending providers.

View logs in the message UI under the SMTP Log tab or fetch them programmatically using the messages API. The API exposes a simple endpoint to retrieve the log for a specific message; consult the API reference for the exact path and required authentication.

When to use SMTP logs

Use SMTP logs when a message is not appearing as expected, when you need to confirm which server connected to Mailinator, or when you want to investigate timing-related issues such as delays between HELO/EHLO, DATA, or the final 250 response.

Security and privacy

SMTP logs contain metadata about the delivery path and protocol exchanges. Treat them as operational telemetry: do not expose these logs to untrusted third parties and remove sensitive artifacts from logs if you retain them outside Mailinator.

Related references

For API access to message details and attachments, see the Messages API section in the API reference. For automated workflows that react to incoming mail, see the Webhooks documentation.
