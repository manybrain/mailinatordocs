---
id: webhook4sms
title: SMS Testing with Webhooks
---

# Testing SMS with Webhooks

Mailinator’s SMS testing platform lets your team receive, store, and analyze text messages in real time — all within a single dashboard. This is essential for testing "human-in-the-loop" workflows like One-Time Passwords (OTP) and Two-Factor Authentication (2FA).

**Real SMS vs Webhooks**

When you use a Programmable SMS number from Mailinator, the message travels through the actual global telecom infrastructure. This is perfect for testing "real-world" factors like latency, message encoding, and carrier connectivity.

However, as your testing scales, two challenges often arise:

1. **Cost**: Unlike email, telecoms charge for every "segment" sent. Testing thousands of messages a day (or week or month) via live SMS can become expensive very quickly.

2. **Regulatory Hurdles**: Every country has different laws. Some regions restrict foreign companies from owning local numbers, making it difficult to test global workflows.

**The Solution: Testing via Webhook**

If you need to test your system’s logic (like code generation, expiration, or database matching) without the overhead of a carrier, you can simulate the SMS using a Webhook.

* **How it works**: Instead of your system sending a request to a telecom provider (like [Twilio](/documentation/docs/features/twiliowebhooks) or Vonage), you divert that request directly to a Mailinator Webhook.

* **The Result**: The message appears in your Mailinator Inbox instantly, exactly as if it were an SMS, but it never touches a telecom network.


**Why use a Hybrid Approach?**

Many of our high-volume clients use a "Hybrid" strategy to balance accuracy and budget:

* The "Smoke Test": Send a small percentage (e.g., 5%) via Real SMS to ensure the carrier pipes are working.
* The "Load Test": Send the remaining 95% via Webhooks to test your internal logic at scale without incurring massive telecom fees.

:::tip
**Pro Move**: This is also a perfect workaround for geographic restrictions. If you can't get a local number in a specific country, simply route those specific test cases to a Mailinator Webhook to keep your testing moving.
:::