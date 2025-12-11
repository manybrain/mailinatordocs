---
id: messagedelivery
title: Message Delivery
---

# Message Delivery

![Mailinator message flow diagram](https://www.mailinator.com/docs/images/m8rmsgflow-f501bd3a.png)


Messages arrive in the Mailinator system several ways.

* Email
* SMS
* HTTP Post / Webhooks

The classic way is they arrive as email.&#x20;

However, messages may also enter the system via SMS (i.e. text message), or HTTP Post.&#x20;

Regardless of how a message arrives, it lands in a designated inbox and is then available for retrieval or manipulation/re-delivery via the rule system.

### Mailinator is Receive Only

It's important to note that the Mailinator system is RECEIVE-ONLY. **No one can send an email from Mailinator**. (Any email appearing to have arrived from an @mailinator.com address has had it's "From" field forged to appear as such).
