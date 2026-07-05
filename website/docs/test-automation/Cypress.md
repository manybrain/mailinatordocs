---
id: cypress
title: Cypress
---

# Cypress

Cypress is great at testing what happens in the browser, but email arrives outside the browser sandbox. Use Mailinator with Cypress when your application needs to verify signup confirmations, OTP codes, password resets, magic links, or other email-driven workflows.

The recommended pattern is:

1. Trigger the workflow from your Cypress test.
2. Use `cy.task()` to call the Mailinator API from Node.js.
3. Retrieve the message from a Mailinator Private Domain.
4. Assert on the subject, sender, body, links, OTP code, or other message content.

## Use a Private Domain

Do not use public `@mailinator.com` inboxes for automated tests that include tokens, OTP codes, reset links, or sensitive data. Public inboxes are readable by anyone.

Use a Mailinator Private Domain so each test run can receive isolated messages that are accessible through your API key.

## Store Credentials

For local Cypress runs, store Mailinator configuration in `cypress.env.json`:

```json
{
  "MAILINATOR_API_KEY": "your_api_key_here",
  "MAILINATOR_DOMAIN": "yourcompany.testinator.com"
}
```

Add `cypress.env.json` to `.gitignore`. In CI/CD, inject these values as environment variables. Cypress can read environment variables prefixed with `CYPRESS_`, such as `CYPRESS_MAILINATOR_API_KEY`.

## Generate Unique Inbox Names

Use a unique inbox name for each test run to avoid collisions when tests run in parallel or messages from previous runs still exist.

```javascript
const runId = Date.now();
const inbox = `cypress-signup-${runId}`;
const email = `${inbox}@${Cypress.env('MAILINATOR_DOMAIN')}`;
```

## Poll for Email with `cy.task()`

Define a Cypress task that polls Mailinator from Node.js. This keeps API credentials and polling logic out of your spec files.

```javascript
const { defineConfig } = require('cypress');
const axios = require('axios');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on('task', {
        async waitForEmail({ inbox, domain, apiKey, maxWaitMs = 30000 }) {
          const pollInterval = 2000;
          const deadline = Date.now() + maxWaitMs;

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

          throw new Error(`No email arrived in inbox "${inbox}" within ${maxWaitMs}ms`);
        },
      });
    },
  },
});
```

Then expose that task through a custom Cypress command:

```javascript
Cypress.Commands.add('getLatestEmail', (inbox) => {
  return cy.task('waitForEmail', {
    inbox,
    domain: Cypress.env('MAILINATOR_DOMAIN'),
    apiKey: Cypress.env('MAILINATOR_API_KEY'),
  });
});
```

## Example: Signup Confirmation

```javascript
describe('Signup email confirmation', () => {
  it('sends a confirmation email', () => {
    const runId = Date.now();
    const inbox = `cypress-signup-${runId}`;
    const email = `${inbox}@${Cypress.env('MAILINATOR_DOMAIN')}`;

    cy.visit('/signup');
    cy.get('[data-cy=email]').type(email);
    cy.get('[data-cy=password]').type('TestPass123!');
    cy.get('[data-cy=submit]').click();

    cy.getLatestEmail(inbox).then((message) => {
      expect(message.subject).to.equal('Confirm your email address');
      expect(message.from).to.include('noreply@yourapp.com');
    });
  });
});
```

## What to Assert

A useful Cypress email test should assert more than delivery. Depending on the workflow, check:

1. The email arrives within the expected timeout.
2. The subject matches the expected string or pattern.
3. The sender is correct.
4. The body includes expected user-specific content.
5. OTP codes, tokens, or links are present and well-formed.
6. Magic links or CTAs point to the expected environment.
7. Expired or reused links fail as expected.

## Common Mistakes

Avoid these patterns:

1. Using public inboxes for test emails that contain sensitive values.
2. Hardcoding one inbox name across all tests.
3. Skipping polling or retry logic.
4. Only asserting that an email arrived.
5. Calling the Mailinator API directly from every spec file instead of using a shared task or command.

For the full walkthrough, see the Mailinator blog post: [How to Test Emails in Cypress](https://www.mailinator.com/cypress-email-testing/).
