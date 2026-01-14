---
id: install
title: Install Mailinator
---

# Installing Mailinator

Mailinator has a powerful [API](./api/), that you can use with your choice of language and tool. Having said this, we provide several official [SDKs](./sdks/sdks.md) which you can install.

## SDK install commands

Pick the package manager that matches your stack and run the corresponding install command.

### JavaScript (Node.js)

```bash
npm install mailinator-api
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

Learn more about our official [SDKs](./sdks/sdks.md).