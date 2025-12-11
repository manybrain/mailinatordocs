---
id: twiliowebhooks
title: Twilio Webhooks
---

# Twilio Webhooks

Mailinator applies specific mappings for services that commonly publish webhooks.

If you test incoming Messages to SMS numbers via Twilio, you may use this endpoint to correctly map "to", "from", and "subject" of those messages to the Mailinator system.&#x20;

By default, the destination inbox is the Twilio phone number. This may be overridden by specifying the destination inbox in the URL.