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

1. Since Mailinator is [receive-only](./core/MessageDelivery.md#mailinator-is-receive-only), you'll need to send an email from your personal account to one of your mailinator inboxes. Include a simple url in the body of the message. Such as:

```bash
sendto: first@YOURINBOXNAME.testinator.com
subject: first email
body: Check out https://www.example.com
```

:::note
Replace YOURINBOXNAME@testinator.com with your Private Domain
:::


2. Now we will use the [Get Latest Message](./api/get-latest-inbox-messages.api.mdx) endpoint to grab that email. Replace YOUR_TOKEN with your API Key and run:

```bash
curl -L "https://api.mailinator.com/api/v2/domains/private/inboxes/first/messages/latest?token=e066bc4e4e8b41aca529d6134dd317d9"
```

3. If you sent an email to first@yourprivatedomain.testinator Check your response!





----

:::tip 
Mailinator Authenticator is specifically designed to test the functionality of 2FA codes.
:::

:::info
This is information

:::

:::warning
This is a warning
:::

:::danger
Some content is more dangerous than others
:::

<details>
  <summary>It is also possible to use [JSDoc type annotations](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) within a `.js` file:</summary>

By default, the Docusaurus TypeScript config does not type-check JavaScript files.

The `// @ts-check` comment ensures the config file is properly type-checked when running `npx tsc`.

```js title="docusaurus.config.js"
// highlight-next-line
// @ts-check

// highlight-next-line
/** @type {import('@docusaurus/types').Config} */
const config = {
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  /* Your site config here */

  presets: [
    [
      '@docusaurus/preset-classic',
      // highlight-next-line
      /** @type {import('@docusaurus/preset-classic').Options} */
      (
        {
          /* Your preset config here */
        }
      ),
    ],
  ],
  themeConfig:
    // highlight-next-line
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
        /* Your theme config here */
      }
    ),
};

export default config;
```

</details>