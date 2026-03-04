---
id: webhooks
title: Webhooks
---

# Webhooks

Mailinator allows you to HTTP Post or Webhook messages into your Private Domain. This is extremely convenient for testing as now all your test emails, SMS messages, and Webhooks will reside in the same place and are accessible via the same Web Interface, API, and Rule System.

```json
//This command will deliver the message to the "bob" inbox

curl -v -H "Content-Type: application/json" 
-d '{"from":"someplace@xyz.com","subject":"testing","text":"helloworld","to":"oto"}' 
"https://www.mailinator.com/api/v2/domains/private/webhook/?whtoken={{token}}"

```

### Webhook Token

Webhooks into your Private System do **NOT** use your regular API Token.

* This is because a typical use case is to enter the Webhook URL into 3rd-party systems (i.e. Twilio, Zapier, IFTTT, etc) and you should never give out your API Token.
* Check your Team Settings where you can create "Webhook Tokens" designed for this purpose.

### Webhook Urls

There are several permutations of the Webhook URLS. Say your Private Domain is mypd.com then all of the following urls are identical:

```html
https://api.mailinator.com/api/v2/domains/mypd.com/webhook/?whtoken=<wh-token>
https://api.mailinator.com/api/v2/domains/private/webhook/?whtoken=<wh-token>
https://api.mailinator.com/api/v2/domains/<wh-token>/webhook/
```

The incoming Webhook will arrive in the inbox designated by the "to" field in the incoming JSON payload. If the incoming payload does not contain a "to" field, or you wish to override the incoming destination, you may specify the designation inbox in the url:

```html
https://api.mailinator.com/api/v2/domains/private/webhook/bob?whtoken=<wh-token>
```

Incoming Webhooks are delivered to Mailinator inboxes and from that point onward are not notably different than other messages in the system (i.e. emails). You may retrieve such messages via the Web Interface, the API, or the Rule System. See the following documentation on the Message API for more information.

As normal, Mailinator will list all messages in the Inbox page and via the Inbox API calls. If the incoming JSON payload does not contain a "from" or "subject", then dummy values will be inserted in these fields.
