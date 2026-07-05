---
id: mailinator-mcp
title: Mailinator MCP
---

# Mailinator MCP

Mailinator MCP lets AI agents interact with Mailinator through the Model Context Protocol. This gives compatible agents a structured way to inspect inboxes and use email or SMS messages while completing a workflow.

Mailinator MCP is available through the [Mailinator CLI](/documentation/docs/ai-agents/mailinator-cli/).

Use Mailinator MCP when an agent needs to:

1. Check for the latest email in a test inbox.
2. Retrieve an OTP code.
3. Find a password reset link.
4. Follow a magic link during a signup or login flow.
5. Validate that a transactional email was sent.
6. Inspect email content while debugging an application.

## Public and private usage

Public Mailinator inboxes are useful for quick, non-sensitive agent experiments and do not require authentication.

Use [Private Domains](/documentation/docs/core/privatemailbox/) for repeatable, sensitive, or production-like workflows. Private Domains are the recommended option when an agent needs to handle OTPs, reset links, login links, private test identities, or CI/CD test data.

## Install the CLI

Install the Mailinator CLI globally with npm:

```bash
npm install -g mailinator-cli
```

## Start the MCP server

Start the MCP server for public inbox access:

```bash
mailinator-cli --start-mcp-server
```

For private domain access, set your Mailinator API token first:

```bash
export MAILINATOR_API_KEY=your_token_here
mailinator-cli --start-mcp-server
```

## Configure Claude Desktop

Add Mailinator to your Claude Desktop MCP configuration. For private access, include `MAILINATOR_API_KEY` in the server environment:

```json
{
  "mcpServers": {
    "mailinator": {
      "command": "node",
      "args": ["/path/to/bin/index.js", "--start-mcp-server"],
      "env": {
        "MAILINATOR_API_KEY": "your_token_here"
      }
    }
  }
}
```

Update `/path/to/bin/index.js` to the installed location of the Mailinator CLI entry point on your machine.

## MCP capabilities

Mailinator MCP provides:

1. Direct AI assistant integration.
2. Tools for active email operations.
3. Resources for passive context access.
4. Natural language email queries.
5. Automatic domain detection.
6. Private domain access when `MAILINATOR_API_KEY` is configured.

## Example prompts

Once the MCP server is configured, useful prompts may include:

1. "Check the joe@mailinator.com inbox."
2. "Show me emails in my private myinbox."
3. "Get the first email and extract any links."
4. "Extract the OTP from this inbox."
5. "Find the password reset link."
6. "Confirm that the welcome email was sent."
7. "Use the latest magic link to finish signup."

## Related resources

Learn more about [Agent Safety and Privacy](/documentation/docs/ai-agents/agent-safety-privacy/), [Agent Recipes](/documentation/docs/ai-agents/agent-recipes/), and the [Mailinator + AI page](https://www.mailinator.com/v4/mailinatorai.jsp).

If you need help getting started, contact [support@manybrain.com](mailto:support@manybrain.com).
