---
id: install
title: Install Mailinator
---

# Installing Mailinator

Mailinator has a powerful [API](/documentation/docs/api/) that you can use with your choice of language and tool. We also provide official [SDKs](/documentation/docs/sdks/overview/) for common development stacks.

Mailinator can be used through several integration paths depending on what you are testing:

1. **API** - Use the Mailinator API to retrieve messages, inspect content, extract links, read OTP codes, and automate assertions in your tests.
2. **SDKs** - Use an official SDK when you want typed helpers for common API workflows in your application or test suite.
3. **CLI** - Use the Mailinator CLI from a terminal, script, CI job, or local development workflow. (link coming soon)
4. **MCP Server** - Connect AI agents to Mailinator so they can inspect inboxes and complete email-driven workflows. (link coming soon)
5. **Universal IDP** - Use Mailinator's OIDC identity provider to test SSO login flows in development, staging, and QA environments. (link coming soon)

## SDK install commands

Pick the package manager that matches your stack and run the corresponding install command.

### JavaScript (Node.js)

```bash
npm install mailinator-client
```

### Python

```bash
pip install mailinator-python-client-2
```

### C# (.NET)

```powershell
Install-Package MailinatorApiClient
```

### Go

```bash
go get -u github.com/manybrain/mailinator-go-client
```

### Ruby

```bash
gem install mailinator_client
```

### Java (Maven Central)

Add the dependency to your build file (replace `VERSION` with the latest release):

```xml
<dependency>
  <groupId>com.manybrain</groupId>
  <artifactId>mailinator-client</artifactId>
  <version>VERSION</version>
</dependency>
```

Learn more about our official [SDKs](./sdks/Overview.md).
