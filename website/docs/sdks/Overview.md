---
id: overview
title: Overview
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# SDKs

Mailinator provides [several official SDKs](https://github.com/manybrain). You can find [installation instructions](/documentation/docs/install/) under Getting Started.

Use SDKs when you want to integrate Mailinator into automated QA, CI/CD pipelines, developer workflows, or private-domain message checks without writing raw HTTP requests. SDKs are useful for retrieving messages, extracting links, reading OTP codes, validating transactional email, cleaning up test inboxes, and building repeatable assertions into your test suite.

For framework-specific examples, see [Test Automation](/documentation/docs/category/test-automation/). For command-line or AI-agent workflows, see [Mailinator CLI](/documentation/docs/ai-agents/mailinator-cli/) and [Mailinator MCP](/documentation/docs/ai-agents/mailinator-mcp/).

Below is a quick overview. Pick your preferred language below to jump to the SDK repository:

<Tabs
  defaultValue="javascript"
  values={[
    {label: 'JavaScript', value: 'javascript'},
    {label: 'Java', value: 'java'},
    {label: 'C#', value: 'csharp'},
    {label: 'Go', value: 'go'},
    {label: 'Ruby', value: 'ruby'},
    {label: 'Python', value: 'python'},
  ]}>
  <TabItem value="javascript">
    1. [Mailinator JavaScript SDK is installable via npm](https://www.npmjs.com/package/mailinator-client)
    2. [Github Code](https://github.com/manybrain/mailinator-javascript-client)  
    3. Read our How to Guide: [How to use the Mailinator JavaScript SDK](/documentation/docs/sdks/javascript-sdk)
  </TabItem>
  <TabItem value="java">
    1. [Mailinator Java SDK is installable via POM](/documentation/docs/install/#java-maven-central)
    2. [Github Code](https://github.com/manybrain/mailinator-java-client)  
  </TabItem>
  <TabItem value="csharp">
    1. [Mailinator C# SDK is installable via NuGet](https://www.nuget.org/packages/MailinatorApiClient)
    2. [Github Code](https://github.com/manybrain/mailinator-csharp-client)  
  </TabItem>
  <TabItem value="go">
    1. [Mailinator Go SDK is installable via Go Modules](https://pkg.go.dev/github.com/manybrain/mailinator-go-client)
    2. [Github Code](https://github.com/manybrain/mailinator-go-client)  
  </TabItem>
  <TabItem value="ruby">
    1. [Mailinator Ruby SDK is installable via gem](https://rubygems.org/gems/mailinator_client)
    2. [Github Code](https://github.com/manybrain/mailinator-ruby-client)  
  </TabItem>
  <TabItem value="python">
    1. [Mailinator Python SDK is installable via pip](https://pypi.org/project/mailinator-python-client-2)
    2. [Github Code](https://github.com/manybrain/mailinator-python-client)  
  </TabItem>
</Tabs>

<br></br>

API Authentication details can be found within the [API reference](/documentation/docs/api/).
