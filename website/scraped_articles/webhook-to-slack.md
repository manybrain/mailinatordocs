---
id: webhookToSlack
title: Feature Update: Webhook to Slack
---

# Feature Update: Webhook to Slack

The plumbers have added a new pipe! One of our favorite ways users can interact with messages in Mailinator is via webhooks. This week we take a look at our newest Feature Update: Webhook to Slack.


## What is a webhook?


If you’re not familiar, a webhook is an automated HTTP request that is triggered by an event in a source system and sent to a destination system. Webhooks are a type of API that are driven by events rather than requests. They allow developers to build applications that can react to certain events happening on other applications. Webhooks use HTTP POST messages to trigger actions in another application when an event fires. The current standard data format for this is JSON, but it’s possible to build a webhook system using SMS or SMTP events.


## Mailinator Routing Rules


Mailinator’s Message Routing Rules allow you to filter and flag your inbound stream of test messages and perform specific actions on messages which match your filter.

This allows you to do things like “Click All Links” in any message where the Subject includes the text “Signup”.

And we’ve added a new action:

Now you can Webhook to Slack: SLACK_WEBHOOK

This action sends any matching message to your Slack Integration or App which is listening at an http endpoint in Slack.

You can get this working you need:

A Slack Integration of App with an http endpoint.

The proper way to do this is with a Slack App (https://api.slack.com/messaging/webhooks).

The quick and dirty (and legacy) way is with a Slack Integration (https://slack.com/apps/A0F7XDUAZ-incoming-webhooks).

In either case, you get a URL where Slack is listening for incoming messages.

A Message Rule in one of your Mailinator team’s Private Domains.

When logged into your Mailinator team, head to the Message Rules page, select the private domain you want to use, and click “Add Rule”.

Name your rule, set the conditions, select the action (SLACK_WEBHOOK), and paste in your endpoint.

Once you click “+Add Rule”, your rule will be active!

Any message coming to that private domain which matches will be sent to your Slack endpoint.

For more on the basics of Mailinator, check out the Essential Guide here.

Let us know what you think!

We’d love to hear use cases, and ideas for improvements.
