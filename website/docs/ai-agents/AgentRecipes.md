---
id: agent-recipes
title: Agent Recipes
---

# Agent Recipes

Use these patterns to connect Mailinator to AI-agent workflows. Prefer [Private Domains](/documentation/docs/core/privatemailbox/) for any workflow involving authentication, tokens, OTPs, reset links, or private test data.

## Create an account, fetch an OTP, and complete signup

1. Generate a unique inbox name, such as `agent-signup-<run-id>`.
2. Have the agent submit the signup form using that Mailinator address.
3. Retrieve the latest message from the inbox with the [Mailinator CLI](/documentation/docs/ai-agents/mailinator-cli/), [Mailinator MCP](/documentation/docs/ai-agents/mailinator-mcp/), or the [Mailinator API](/documentation/docs/api/).
4. Extract the OTP code from the message body.
5. Submit the OTP in the application.
6. Confirm that the account reaches the expected signed-in or verified state.

## Reset a password with an agent

1. Start a password reset flow for a test user.
2. Wait for the reset email in the user's Mailinator inbox.
3. Extract the reset link.
4. Have the agent open the reset link.
5. Set a new test password.
6. Confirm the old password no longer works and the new password does.

## Validate transactional email in a coding-agent workflow

1. Have the agent make a code change that triggers an email.
2. Run the application or automated test.
3. Retrieve the generated email from Mailinator.
4. Assert on the subject, sender, body, links, and environment-specific URLs.
5. Ask the agent to fix the implementation if the email is missing or malformed.

## Use Mailinator MCP with an agent

1. Configure the [Mailinator MCP](/documentation/docs/ai-agents/mailinator-mcp/) server for the agent.
2. Give the agent access only to test inboxes and test domains.
3. Ask the agent to inspect the expected inbox.
4. Have the agent extract the needed OTP, link, or message content.
5. Continue the browser, API, or code workflow using that value.

## Test SSO with Universal IDP

1. Configure your application to trust [Mailinator Universal IDP](/documentation/docs/features/universal-idp/) in a test environment.
2. Start the SSO login flow.
3. Use a public or private-domain Mailinator identity, depending on the test.
4. Confirm that your application accepts the signed ID token.
5. Assert that the resulting user session has the expected email, claims, and permissions.

For safety guidance, see [Agent Safety and Privacy](/documentation/docs/ai-agents/agent-safety-privacy/).
