---
id: inject-message
title: How to Inject a Message into your Inbox
---

# How to Inject a Message into your Inbox

You can inject messages into your Private Mailinator inbox (any of them) programmatically using our API. 

From Google:

You can inject messages into Mailinator, especially private ones, programmatically using HTTP POST requests with its API or by setting up webhooks, allowing you to send JSON or email-like payloads directly to a specified inbox for testing email workflows, OTPs, or receipts, integrating with tools like Zapier or Postman. For basic public testing, you can often just send an email to anything@mailinator.com, but for automated testing, subscriptions offer private domains, API keys, and more control. 

Methods for Injecting Messages

1. HTTP POST (API): The most common method for automation.
Private Domains: Use your API token and target a specific private inbox (e.g., your-inbox@your-private-domain.com).
Payload: Send JSON data or format it like an email (From, Subject, Text) for UI display.
Tools: Easily done with clients like mailinator-go-client or through Postman.
2. Webhooks: Set up third-party services (like Twilio, Zapier) or your own systems to send HTTP POSTs to Mailinator.
3. Email (Standard/SMTP): Send emails to any address on a Mailinator domain (e.g., testuser@mailinator.com). 

Steps to Inject via HTTP POST (Example using API)
1. Get Your API Token: Find it in your Mailinator Team settings.
2. Identify Your Target: Choose a private domain (e.g., mytest.com) and an inbox (e.g., signup-test).
3. Construct the Request:
Body (JSON):
```json
{
  "to": "your-inbox@your-private-domain.com",
  "from": "sender@example.com",
  "subject": "API Test Email",
  "text": "This is the body of the injected message."
}
```

Common Use Cases
1. Testing email verification in signup flows.
2. Validating one-time password (OTP) delivery.
3. Verifying automated email receipts. 