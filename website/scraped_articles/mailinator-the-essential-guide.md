---
id: mailinatorTheEssentialGuide
title: Mailinator: The Essential Guide
---

# Mailinator: The Essential Guide

By Beth Marshall 
February 10, 2022 
0 Comments

This essential guide is aimed at Testing and Development teams of all experience levels who want to learn how to implement successful email workflow testing. In this article, I’ll be walking you through all of the key features of Mailinator. I’ll include tips and tricks on how to get the most out of your Mailinator account.

Essential Guide To: Introduce you to Mailinator

Mailinator started out in 2003 – in tech years that is a mighty long time ago! What began as a conversation between college buddies in a bar quickly spawned the world’s first disposable email service. People finally had somewhere to put their Spam – thanks Mailinator Guy!

Mailinators Original Mascot: Mailinator Guy

The original founders of the company are still here. Over the years, they noticed that people were adapting Mailinator’s technology to help them to test their world-class systems. Mailinator thought this was awesome. Based on the feedback they got from users, they began to add features that would help them even more.

Today, Mailinator is the predominant resource for world-class QA testing teams looking to automate their Email and SMS workflow testing. Thousands of testers, from single users to Enterprise scale customers, rely on Mailinator every day.

We also still have our free public inboxes, just in case you still need somewhere to direct that Spam to. As you can see from our Realtime Feed, the internet’s Spam factory is still going strong!

Essential Guide To: Mailinators Key Features

Our homepage has a really handy visual to show what Mailinator does at a high level.

Extract from Mailinator homepage showing key functionality including API, SMS and Rules

Lets go into each of these features in more detail, and give some practical examples of how they might help you.

Email

Put simply, Mailinator enables individuals, small teams or Enterprise scale organisations to create an email testing workflow system that ensures your site is working properly.

Ever released a new email workflow to production and realised there was a mistake – perhaps the links redirected to your testing environment, or an ARM template hadn’t been updated so the contact number or key information was incorrect, or missing altogether?

That terrible sinking feeling when you realise that your customers have already seen the broken email, and your support team are asking what the heck is going on? This pain can be avoided by validating your emails in a safe, private domain before your customers ever see them. See the next section to find out some specific ways you can do this.

Watch this essential guide explainer of the Private Mailinator inbox you get as a Verified Pro or greater customer.

 

SMS

Have you ever been stuck automating a sign up workflow because it requires two factor authentication (2FA) or a one-time-password (OTP) be sent via text before you can sign in?

Because Mailinator provides SMS numbers that can handle these messages, and treat them like any other message coming to a Mailinator inbox, this means automating this isn’t a blocker anymore.

Watch this short video to learn more.

 



API

Ever wish you could check if the email you are testing as part of a signup, login or forgotten password flow has landed via the API? How about deleting all of the emails, or fetching the links from within an email? With Mailinator, you can! API calls are much faster, and you can use our bespoke API to do many things, including:-

Message API – Fetch an inbox, message, message links or attachments, delete message(s)
Stats API – See usage information for your team, such as how many SMS or Emails you sent on a given day
Domains API – Usage stats for all domains you have registered* (e.g. @test.testinator.com and @qa.testinator.com)
Rules API – Set, disable, enable, delete and get all current rules such as (see rules section for more information)

This allows you to make tests which are more atomic and less flaky, by interacting with email at the API level.

Click the Run in Postman button to fork our Public Mailinator Postman Collection and Environment Variables. Once you’ve filled in the variables with your own information (API token etc.) you should be good to start using the Mailinator API for your testing!

Run In Postman Button

And here is another essential guide tutorial video to walk you through how the “Run in Postman” button, and our API collection itself works.

 

*If you are a Verified Pro and Business user you get a single domain, multiple domains are available to Business Plus and Enterprise customersInject a Message (HTTP POST)

If you’d like a programmatic way to send an email to your Mailinator inbox, you can do this using our inject a message feature.

Here’s a tutorial to walk you through one of the ways of doing it, please see our documentation page for other options.

 

Web GUI

We’ve talked a lot about automation in this guide, but what if you just want to quickly run your eyes over things? Our fantastic Web GUI is a really handy way to:-

View all emails for all inboxes in a single place
Forward or Delete email
Amend your teams settings (set team name/private domain/grab API token/generate Webhook Tokens)
Manage your team members (add new users)
View your Team Limits and statistics on how your team are using Mailinator

Let us walk you through the features in our essential guide here.

 

Message Rules: Webhook, Integrations, Click All Links, Forward

Using the Rules API or the Setup Rules menu option in your private Mailinator inbox, you can create rules which will apply to all, or some, of your incoming messages.

For example, you might want to forward all messages to your QA inbox to a slack channel. You might want to check the links can be forwarded. Or, as in this video tutorial, you might be performing load testing, and wish to drop emails before they are saved to your inbox.

Lets take a look.

 

 

Essential Guide: Summary

We hope this guide has helped you to understand some of Mailinator’s key features. Sign up for our free Verified Pro account or a 2 week trial of our business plan here.

Mailinator has evolved because our community of users is always finding new and innovative uses for the technology we’ve built. If you have a feature you’d like to see in Mailinator, please submit a request here.

Bye for now!

Share:
