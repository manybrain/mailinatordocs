---
id: inject-message
title: Inject a Message
---

# How to Inject a Message into your Inbox

You can inject a message into any Private Mailinator inbox, programmatically, using our API. 


### Methods for Injecting Messages

In general, there are 3 ways to get a message into a Mailinator inbox: 

1. SMTP: Send an email to your Mailinator address! (You probably already guessed this one!)
2. [Webhooks](/documentation/docs/features/webhooks/): If your application can send a webhook or you use a third-party service like Twilio or Zapier. Mailinator can receive it. 
3. HTTP POST: Also known as "injecting" a message. You can take any JSON payload and simply load it into your Mailinator account using our API and an HTTP POST request. 

## How to Inject a message (HTTP POST)

Follow these steps to create a message using the Mailinator API.

1. Get [Your API Token](/documentation/docs/gettingaround)

First, locate your API token in your account settings. Then, identify your target domain and inbox to construct your request.

2. Construct the Request:

Second, use the following curl command. Include your API token, domain (like private) and inbox in the URL:

```bash
curl -L -X POST "https://api.mailinator.com/api/v2/domains/{{domain}}/inboxes/{{inbox}}/messages?token=YourAPIKeyHere" \
     -H "Content-Type: application/json" \
     -d '{
          "from": "sender@example.com",
          "subject": "API Test Email",
          "text": "This is the body of the injected message."
        }'
```
3. Send!

Once you execute the command, the message will appear in your inbox instantly.

## Tutorial Video

<iframe width="100%" height="315" src="https://www.youtube.com/embed/0FBIxcewodY" title="Inject a Message into your Inbox" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>