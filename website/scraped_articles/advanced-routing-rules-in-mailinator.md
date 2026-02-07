---
id: advancedRoutingRulesInMailinator
title: Advanced Routing Rules in Mailinator
---

# Advanced Routing Rules in Mailinator

By Mailinator 
November 17, 2022 
0 Comments

We’ve just added some big improvements to Mailinator’s Routing Rules.

There are new conditions!

You can flag emails based on To: , From: , Subject: , and the IP address from which it was sent.

Here we’re setting up a rule to automatically click the links in any one-time-password test emails.

(assuming your OTP tests include ‘otp’ in the subject line)

Set a condition to check the subject:

Then set the type of test. In this case, we want the rule to trigger if the subject contains ‘otp’:

Then we set the Action – Click All Links:

After we add the rule, our Message Rules look like this:

The Message Rules have priorities. Routing Rules are checked in order. We can add another rule that will Drop all these emails after the links are clicked.

When we add this new routing rule, we see this:

The conditions are the same, so any email which triggers the first rule will also trigger the second. Any email to this private domain (team-norm.testinator.com) which matches these rules will get its links clicked, and then it will be Dropped – deleted before it ever gets to your Mailinator storage.

Routing Rules can have multiple conditions. Here we’re flagging any emails where the subject contains ‘error’ and the from contains devmail. We want these messages to be collected, so we’re sending them to an endpoint with a webhook (and http POST).

We want to webhook these messages only if both conditions match, so we select “Trigger if ALL Conditions match”. It’s like a logical AND.

Then we set the Action and tell the rule where to send the message that match:

Multiple conditions can also be set such that the rule will Trigger if ANY Condition matches (a logical OR), and here’s an example:

If any message has ‘foo’ or ‘bar’ anywhere in the To field, this rule will use a webhook to send that message to an alert dashboard.

Since we want to keep those messages in our Mailinator team’s storage, we won’t add another Drop rule. These messages will still be in your team’s inbox – and a copy of them will be on the alert dashboard.

We can also set a rule that specifically looks for things we don’t want to save. Here we’ve set up a rule to immediately Drop (to not save) any message that came from an IP address ending in 128.230

I don’t have a clever story about why we’d want to do that, I just wanted to demonstrate the “ENDS_WITH” option:

After we add this rule, we’ll see all the rules, and their priorities, that are set in the team-norm.testinator.com domain.

If you have other ideas for helpful Routing Rules, please email us your ideas support@manybrain.com.

Share:
