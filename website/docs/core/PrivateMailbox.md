---
id: privatemailbox
title: Private Mailbox
---


# Private Mailbox

Most customers use a [Private Mailbox](https://www.mailinator.com/v4/public/inboxes.jsp?vfpshow=true) due to its combination of privacy, repeatability, and API access. Private Mailboxes are the recommended Mailinator path for automated QA, CI/CD pipelines, AI-agent workflows, OTP testing, password resets, magic links, transactional email assertions, and SSO/OIDC identity flows. In addition, Private Mailboxes have several advantages over Public:&#x20;

1. **Private Domains**. Subscribers receive one or more Private Domains which provide a private version of Mailinator. That is, you control all inboxes for a given domain (i.e. you can use a Domain you provide or the system will provide one for you). You may view all such inboxes in one "super inbox" which lists every email coming into the domain in realtime.&#x20;
2. **API Access**. Subscribers gain API access to messages within the Mailinator system. They may use the API to access all email in their **Private Domain(s)** and to the **Public Mailinator** system.
3. **Longer email retention**. Emails in Private domains are not automatically deleted until your team's storage is exhausted. At this time, new emails push out old emails. Otherwise, emails in private domains are persistent as long as the account is active.
4. **Automations**. Subscribers gain the ability to Automate through tools like webhooks, rules and injecting messages directly into their inbox.&#x20;
5. **Authenticator**. Test 2FA and TOTP using your account. (link coming soon)
6. **Universal IDP**. Test SSO/OIDC login flows with public or private-domain identities in development, staging, and QA environments. (link coming soon)
7. **CLI and MCP access**. Use Mailinator from terminal workflows, CI jobs, and AI-agent tools. (links coming soon)
8. **Single Sign On**. Enterprise plans offer single sign on access for your Mailinator team. (link coming soon)
9. **Team Members**. Paid plans offer the ability to have multiple team members use the same account.&#x20;

Private Mailboxes work with the [Mailinator API](/documentation/docs/api/), [SDKs](/documentation/docs/sdks/overview/), webhooks, streaming, rules, and other automation tools so your tests can receive, inspect, and act on workflow messages without relying on shared public inboxes.

Please see our [plans for additional usage](https://www.mailinator.com/pricing/) or [signup for a free account](https://www.mailinator.com/v4/public/inboxes.jsp?trialshow=true).&#x20;
