---
id: playwright
title: Playwright
---

# Playwright

Use Playwright with Mailinator to test login, signup, password reset, OTP, magic link, and other email or SMS-driven workflows across Chromium, Firefox, and WebKit.

The recommended pattern is:

1. Trigger the workflow in Playwright.
2. Poll the Mailinator API for the expected email or SMS message.
3. Extract the OTP code, token, link, or message content.
4. Submit or assert against that value in the browser.

## Set Up Playwright

Initialize Playwright if your project does not already use it:

```bash
npm init playwright@latest
```

Install an HTTP client for calling the Mailinator API from your tests:

```bash
npm install axios
```

## Use a Private Domain

Use a Mailinator Private Domain for automated Playwright tests. Private domains keep test messages isolated and available through your API key.

Do not use public `@mailinator.com` inboxes for tests that include OTP codes, reset links, login links, tokens, or sensitive data. Public inboxes are readable by anyone.

Store your Mailinator API token and domain in environment variables:

```bash
MAILINATOR_API_KEY=your_api_key_here
MAILINATOR_DOMAIN=yourcompany.testinator.com
```

## Create a Mailinator Helper

Create a helper that polls a Mailinator inbox until a message arrives.

```javascript
const axios = require('axios');

async function waitForMailinatorMessage({ inbox, timeoutMs = 30000 }) {
  const apiKey = process.env.MAILINATOR_API_KEY;
  const domain = process.env.MAILINATOR_DOMAIN;
  const pollInterval = 2000;
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    const response = await axios.get(
      `https://api.mailinator.com/api/v2/domains/${domain}/inboxes/${inbox}`,
      { headers: { Authorization: apiKey } }
    );

    const messages = response.data.msgs;
    if (messages && messages.length > 0) {
      return messages[0];
    }

    await new Promise((resolve) => setTimeout(resolve, pollInterval));
  }

  throw new Error(`No message arrived in inbox "${inbox}" within ${timeoutMs}ms`);
}

async function getMailinatorMessage(messageId) {
  const apiKey = process.env.MAILINATOR_API_KEY;
  const domain = process.env.MAILINATOR_DOMAIN;

  const response = await axios.get(
    `https://api.mailinator.com/api/v2/domains/${domain}/messages/${messageId}`,
    { headers: { Authorization: apiKey } }
  );

  return response.data;
}

module.exports = {
  waitForMailinatorMessage,
  getMailinatorMessage,
};
```

## Example: Email OTP Login

This example triggers an OTP login flow, retrieves the OTP from Mailinator, and submits it back through the UI.

```javascript
const { test, expect } = require('@playwright/test');
const {
  waitForMailinatorMessage,
  getMailinatorMessage,
} = require('./mailinator');

test('logs in with an email OTP', async ({ page }) => {
  const runId = Date.now();
  const inbox = `playwright-otp-${runId}`;
  const email = `${inbox}@${process.env.MAILINATOR_DOMAIN}`;

  await page.goto('https://yourapp.com/login');
  await page.fill('[data-testid="email"]', email);
  await page.click('[data-testid="send-otp"]');

  const summary = await waitForMailinatorMessage({ inbox });
  expect(summary.subject).toContain('OTP');

  const message = await getMailinatorMessage(summary.id);
  const body = message.parts[0].body;
  const match = body.match(/\b(\d{6})\b/);

  expect(match, 'OTP code found in email body').not.toBeNull();

  await page.fill('[data-testid="otp"]', match[1]);
  await page.click('[data-testid="verify-otp"]');

  await expect(page).toHaveURL(/dashboard/);
});
```

## SMS OTP Testing

You can use the same pattern for SMS workflows when your Mailinator account is configured for SMS testing. Trigger the SMS in your application, poll the relevant Mailinator inbox or phone-number destination, extract the OTP code, and submit it through Playwright.

## Practical Tips

1. Use unique inbox names for every test run.
2. Poll with a timeout so tests handle normal email/SMS delivery latency.
3. Assert on subject, sender, body content, OTP format, and redirect destination.
4. Use Private Domains for any workflow involving authentication or sensitive data.
5. Monitor API usage in CI/CD so test suites stay within plan limits.

For the original walkthrough, see the Mailinator blog post: [Testing OTP Logins with Playwright and Mailinator](https://www.mailinator.com/playwright-testing/).
