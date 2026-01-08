---
id: quickstart
title: Quickstart
---

# Mailinator in 5 minutes


This quick tutorial will guide you through:

- ✅ Getting Your API Key
- ✅ Getting the Latest Message
- ✅ Reading the Output
- ✅ Getting Email links

Let's begin 🚀

:::info
We're using **curl** to demonstrate these requests. You can copy+paste it into your Terminal (macOS/Linux) or Command Prompt (Windows) to follow along.
:::


## ✅ Getting Your API Key

Before we begin, you'll need you API Key (or API token) from your account. To get it:

1. Log in to your [Mailinator Dashboard](https://www.mailinator.com/v4/private/inboxes.jsp?to=*).
2. Go to [Team Settings](https://www.mailinator.com/v4/private/team_settings.jsp).
3. Copy your API Token and your Private Domain.

Don't have an account? [Signup for a free one](https://www.mailinator.com/v4/public/inboxes.jsp?trialshow=true).

### Scenario:

Once an email arrives to our inbox, we can use the API to get all it's details.


## ✅ Getting the Latest Message

1. Since Mailinator is [receive-only](./core/MessageDelivery.md#mailinator-is-receive-only), you'll need to send an email from your personal account to one of your mailinator inboxes. Include a simple url in the body of the message by copying and pasting this:

```bash
sendto: first@<YourPrivateDomain>.testinator.com
subject: first email
body: <a href="https://www.example.com">Example.com</a>
```


2. Now we will use the INSERT ENDPOINT to grab that email. Replace `YourAPIKeyHere` with your API Key and run in your terminal:

```bash
curl -L "https://api.mailinator.com/api/v2/domains/private/inboxes/first?limit=1&token=YourAPIKeyHere"
```

3. If you sent an email to `first@<YourPrivateDomain>.testinator.com` Check your response!


<details>
  <summary>Troubleshooting</summary>

  1. Make sure you replaced `YourPrivateDomain` with your actual Private Domain
  2. If you changed the inbox in the sendto, make sure you update it in the curl request as well. For example we are using `first`, but if you used a different inbox like `fred` you'll need to update the url such as `/domains/private/inboxes/{changehere}`
  3. Make sure you replace `YourAPIKeyHere` with your API Key
</details>

## ✅ Reading the Output

## ✅ Getting Email links