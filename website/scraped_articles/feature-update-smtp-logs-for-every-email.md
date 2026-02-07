---
id: featureUpdateSmtpLogsForEveryEmail
title: Feature Update: SMTP Logs for Every Email
---

# Feature Update: SMTP Logs for Every Email


The Mailinator system is quite useful for this as the custom SMTP server is built to store emails (in both the Public and Private systems) the moment that the email fully arrives.

To aid this type of use, every email now has available the SMTP Transaction Log that was used to deliver the email to our servers. This includes the timings (in milliseconds) of how quickly each side sent their next message.

Here's an example:

[SMTP Example Table in original post]

Of course, accessing the SMTP LOG is also available via the Mailinator API!

GET https://www.mailinator.com/api/v2/domains/private/messages/<the_message_id>/smtplog

You'll see the SMTP LOG tab on every email page (again, both in the Public and Private Mailinator systems). We've already been seeing some surprising behavior from particular sending vendors.

Hopefully you find this feature interesting as we do!

To take advantage of all the features, start a free trial!
