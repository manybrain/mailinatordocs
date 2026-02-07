---
id: mailinatorAutomationTutorialSignInWorkflow
title: Mailinator Automation Tutorial: Sign-In Workflow
---

# Mailinator Automation Tutorial: Sign-In Workflow

By Beth Marshall 
January 24, 2022 
0 Comments

In this post, my first as QA Rel for Mailinator I’ll provide a free Mailinator Automation Tutorial, with accompanying code, to show you how you can use Selenium and Mailinator to automate your sign in workflow.

As a QA professional, a common task I am asked to complete is testing my sign up workflow. This is a critical part of any web based system, making ensuring a customer can sign up for the first time a brilliant candidate for automated regression testing.

But there is a problem here. Most modern sign up flows require that I enter an email address and click a link that is sent to that address. This has to happen before I can actually sign in for the very first time. It also has to be a brand new email address, that isn’t in my system already. This means a lot of automated tests come to a premature stop – requiring manual intervention to click that email link and complete the sign in flow.

How Can I Fix This Using Mailinator?

Mailinator is one of the tools that can help with this. Built in 2003, what began as a side project turned into the worlds first disposable email site. Over the past few years Mailinator noticed that QA’s were using their system to help their testing efforts. Since then, the Mailinator team have optimised their system specifically for testers and developers, and now hundreds of thousands of emails every single day go through their enterprise-scale servers. We are trusted by thousands of companies across the globe to support their email testing efforts.

Take a look at this video that I made recently. It shows how you can quickly automate your end to end flow using a UI automation framework such as Selenium. You can even find the accompanying code on my Github page so you can fork it yourself here.

YouTube Video Showing Mailinator Test Automation Tutorial

Using Selenium I can auto-generate a random email address. That email already exists in Mailinator – this can be an inbox on your own private domain or a publicly visible inbox. I can then use that email to sign up -> click the sign up link -> register the new account -> login to the site. The email changes every time my test is run, so no more flaky tests. This test can go into your overnight regression pack or run in CI/CD environment. So I’ll find out quickly if anything has happened that could have broken this flow before my customers do.

Do I Have To Use UI Automation with Mailinator?

Of course, I don’t have to use Selenium to complete this task. My Mailinator emails can be used with any UI automation framework, such as Cypress, or Puppeteer. More powerful still, I can access my Mailinator emails through API calls or Webhooks. This means I can check them using an API tool such as Postman. Or you can simply eyeball it manually.

Over the coming weeks I’m looking forward to walking through these features and more. I’ve used Mailinator for years, and I can’t wait to show you what it has become.

You can sign up for a free trial and see if Mailinator is the right tool for you to help test your emails here.

Share:
