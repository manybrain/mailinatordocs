---
id: usingTwilioWebhooksWithMailinator
title: Using Twilio Webhooks with Mailinator
---

# Using Twilio Webhooks with Mailinator

By Mailinator 
June 11, 2021

(or any webhooks really)

Send Your Webhooks to Public Mailinator

You can now direct JSON webhooks from anywhere to Mailinator.com. Mailinator has always been known for email, but has actually supported SMS for several years. Mailinator now allows anyone to post their webhooks directly into the Public (i.e., FREE) Mailinator system.

Messages that arrive this way will arrive in the destination inbox just as an email would. Of course, incoming webhooks will retain their original form and are visible by clicking the link on the inbox page. It’s easy too! Here’s the URL:

https://mailinator.com/api/v2/domains/public/webhook/<destination-inbox>

Posting JSON data to that URL will inject that data into the respective Mailinator inbox. Here’s a full curl command to try it out right now:

curl -v -d '{"from":"MyMailinatorTest", "subject":"testing message", "text" : "hello world", "to" : "jack" }'
-H "Content-Type: application/json"
-X POST "https://www.mailinator.com/api/v2/domains/public/webhook/bob/"

(Check the “bob” inbox at Mailinator.com after running this command)

Twilio

Mailinator will accept webhooks from anywhere (your custom webhooks, Zapier, IFTTT … you name it!) but, we’re adding direct mapping support for some more popular services that send webhooks. Twilio is up and running already and just requires a small modification to the URL:

https://mailinator.com/api/v2/domains/public/twilio/<destination-inbox>
For Mailinator Subscribers - Private Webhooks

For Mailinator subscribers, the functionality goes deeper. Firstly, you can publish webhooks to your Private Domain as you’d expect. In addition, incoming webhooks enjoy all the advantages of private messages with Mailinator including access via Web or API, and execution through the Mailinator Rule System.

By web hooking your SMS messages into your Private Domain, your automated tests now have a one-stop-shop (with just one API you’re already used to), to access the incoming messages that make up your Message Workflow.

We’re excited about this new feature and excited to see what our Customers will do with it !

You can find more information about the feature in our documentation for both the Public and Private systems.

PRIVATE WEBHOOK DOCUMENTATION

PUBLIC WEBHOOK DOCUMENTATION

Thanks for using Mailinator !

Share:
