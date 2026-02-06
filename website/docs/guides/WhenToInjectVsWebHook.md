---
id: injectVSwebhook
title: Injection vs Webhook
---

## When to Inject a Message vs use a Webhook

Mailinator offers a lot of solutions for automated testing, but choosing between [Injecting a Message](/documentation/docs/guides/inject-message) and Webhooks (Incoming) usually boils down to whether you are simulating an external sender or controlling the data flow yourself.

### Webhooks:
Webhooks are the "open door" of Mailinator. You use these when you want to receive data from a third-party service (like Stripe, GitHub, or your own app’s outbound mailer).

* **Public Access**: Anyone with the URL can send data to it. No authentication is required to send the message. (Note: You do need a [Webhook token](/documentation/docs/features/webhooks/))
* **The "Real World" Test**: This is the best way to test how your system interacts with external services in a production-like environment.
* Format: Typically receives standard HTTP POST requests.

### Injecting a Message:
You use the Mailinator API to manually push a message into an inbox. [Learn more](/documentation/docs/guides/inject-message).

* **Secure & Private**: Requires your API Key. This should only be done from your backend code or secure CI/CD environment—never from a client-side script where the key could be leaked.
* **Granular Control**: Unlike a webhook, which just takes what it’s given, Injection allows you to define the sender, the subject, and the body (HTML or Text) exactly as you need it for a specific test case.
* **Speed**: Since you aren't waiting on a third-party mail server to "eventually" send the email, injection is near-instantaneous for high-speed testing.

:::tip
We recommend using Webhooks to test if your application is correctly sending notifications. If you want to test inbox logic and don't want to wait for a real email to travel from your system to ours, inject it. 
:::