---
id: mailinator-cli
title: Mailinator CLI
---

# Mailinator CLI

The Mailinator CLI lets developers, testers, CI jobs, and [AI-agent workflows](/documentation/docs/category/ai-agents/) interact with Mailinator from the command line.

Use the CLI when you want to:

1. Check inboxes from a terminal.
2. Retrieve messages during local development.
3. Inspect email or SMS workflow output without opening the Mailinator UI.
4. Script Mailinator checks in CI/CD.
5. Provide a command-line bridge for agent workflows.

## Common workflows

Use the CLI for workflows such as:

1. Listing messages in an inbox.
2. Reading the latest message.
3. Retrieving a message as text, HTML, JSON, or full message data.
4. Extracting links from an email.
5. Debugging email workflows from a shell or automation script.
6. Working with Public Mailinator inboxes for non-sensitive checks.
7. Working with Private Domains for automated and sensitive workflows.

## Install the CLI

Install the CLI globally with npm:

```bash
npm install -g mailinator-cli
```

## Public inboxes

Public Mailinator inboxes do not require authentication. List emails in any public inbox by passing the inbox name and `public` domain mode:

```bash
mailinator-cli inbox testuser public
```

## Private domains

Use a [Mailinator Private Domain](/documentation/docs/core/privatemailbox/) for workflows that involve OTP codes, password reset links, magic links, private test users, or other sensitive data.

Set your API token before accessing private email:

```bash
export MAILINATOR_API_KEY=your_token_here
```

Then list messages in a private inbox:

```bash
mailinator-cli inbox myinbox private
```

## Retrieve email content

After listing an inbox, retrieve a specific email by message number and output format.

Get a specific email as plain text:

```bash
mailinator-cli email 1 text
```

Extract links from an email:

```bash
mailinator-cli email 1 links
```

Get full email data:

```bash
mailinator-cli email 1 full
```

## Output formats

The CLI supports multiple output formats for AI, scripts, and manual debugging:

1. Plain text.
2. HTML.
3. JSON.
4. Headers.
5. Links.
6. Full message data.

## Debugging

Use verbose mode when you need more detail about CLI behavior or API requests.

Public inboxes are public and should only be used for quick, non-sensitive experiments. For private automation, CI/CD, OTP, magic-link, or agent workflows, use a Private Domain with `MAILINATOR_API_KEY`.

## Related resources

Learn more about [Mailinator MCP](/documentation/docs/ai-agents/mailinator-mcp/), [Agent Safety and Privacy](/documentation/docs/ai-agents/agent-safety-privacy/), [Agent Recipes](/documentation/docs/ai-agents/agent-recipes/), and the [Mailinator + AI page](https://www.mailinator.com/v4/mailinatorai.jsp).

If you need help getting started, contact [support@manybrain.com](mailto:support@manybrain.com).
