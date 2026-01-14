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
We're using **curl** to demonstrate these requests. You can copy + paste it into your Terminal (macOS/Linux) or Command Prompt (Windows) to follow along.
:::

### Scenario

Let's say you receive an email that contains a link to a friend's website. We can use Mailinator's API to get the message and the link programmatically.


## 1. Getting Your API Key

Before we begin, you'll need you API Key (or API token) from your account. To get it:

1. Log in to your [Mailinator Dashboard](https://www.mailinator.com/v4/private/inboxes.jsp?to=*).
2. Go to [Team Settings](https://www.mailinator.com/v4/private/team_settings.jsp).
3. Copy your API Token and your Private Domain.

*Don't have an account? [Signup for a free one](https://www.mailinator.com/v4/public/inboxes.jsp?trialshow=true).*


## 2. Getting the Latest Message

**Step A: Send the Email**

Send an email from your personal account to `first@YOURDOMAIN.testinator.com`. Include a link in the body: `<a href="https://www.example.com">Verify Account</a>`

**Step B: Get messages from the Inbox**

Now, use the endpoint below to grab the messages from your first inbox. We will use `limit=1` to see only the most recent one.

```bash
curl -L "https://api.mailinator.com/api/v2/domains/private/inboxes/first?limit=1&token=YourAPIKeyHere"
```

## 3. Reading the Output

Check your response! It should look something like this:

**The Response**
```json
{
    "cursor": "6066bb5ae7eb1c4a6fe5811f",
    "msgs": [
        {
            "subject": "first email",
            "domain": "testinbox.testinator.com",
            "origfrom": "Chris Tester <chris@tester.com>",
            "from": "Chris Tester",
            "id": "first-1768340314-09630157217903",
            "source": "EMAIL",
            "to": "first",
            "time": 1768340314000,
            "seconds_ago": 47
        }
    ],
    "domain": "private",
    "to": "first"
}
```

Mailinator returns a JSON object, summarizing your email. 

Locate the `id` field. This is the unique identifier for that specific message. Copy it for the next step.

## 4. Getting Email links

Now we will use the Get Links endpoint. This is the "magic" step because it parses the email for you and extracts all URLs into a list.

**Step C: Get the links from the email**

Replace `{MSG_ID}` with the ID you copied above.

```bash
curl -L "https://api.mailinator.com/api/v2/domains/private/inboxes/first/messages/{MSG_ID}/links?token=YOUR_TOKEN"
```

**The Response**

```json
{
    "links": [
        "https:\/\/www.example.com"
    ]
}
```


Mailinator returns a simple array of links. (Note: the formatting is valid JSON and the extra slahes can be removed using a JSON parser if needed). 

### Endless possibilities

In less than 5 minutes you've learned how to retreive an email with one API call and pull the links from it with a second API call. Together, these two calls took less than a second in response time.

**Now imagine the possiblities** in automating email workflows! 

- Need to confirm a purchase confirmation has the right order number, text, images, links, etc? Easy! 
- Need to test the signup flow for a new user, but never did it because grabbing that confirmation email was too difficult? Not anymore.
- Or you simply want to confirm that every email generated from your system is correctly sent? Done!



<details>
  <summary>Questions + Troubleshooting</summary>

  1. Since Mailinator is [receive-only](./core/MessageDelivery.md#mailinator-is-receive-only) our demonstration has you sending the email.
  2. Make sure you replaced `YourPrivateDomain` with your actual Private Domain
  3. If you changed the inbox in the sendto, make sure you update it in the curl request as well. For example we are using `first`, but if you used a different inbox like `fred` you'll need to update the url such as `/domains/private/inboxes/{changehere}`
  4. Make sure you replace `YourAPIKeyHere` with your API Key
  5. Make sure you replace `{MSG_ID}` with the ID of the message. It looks like `first-1768340314-09630157217903`. No quotes necessary.
</details>