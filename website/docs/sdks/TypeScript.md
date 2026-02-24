---
id: typescript-sdk
title: TypeScript Examples
---

# TypeScript Examples

This page shows how to use the Mailinator SDK from TypeScript/ESM with type-safe imports and examples that match the JavaScript usage page.

## Installation

Build from source (recommended for TypeScript users):

```bash
npm install
npm run build
```

Or install the published package:

```bash
npm install mailinator-client
```

The package is authored in TypeScript and includes type definitions so you can import types directly in your project.

## Basic concepts

The SDK exposes a small client class named MailinatorClient. API calls are represented as Request classes (implementing Request or RequestWithoutToken). Use MailinatorClient.request(request) to execute requests that require an API token. Use MailinatorClient.requestWithoutToken(request) to execute tokenless requests (for example certain webhook endpoints). All requests return a Promise resolving to an IRestResponse that typically contains statusCode and result.

## Create a client

```ts
import { MailinatorClient } from 'mailinator-client';

const client = new MailinatorClient(process.env.MAILINATOR_API_TOKEN as string);
```

If you need to call endpoints that don't require an API token, create the client without a token and use requestWithoutToken:

```ts
const clientNoToken = new MailinatorClient();
```

## Get all message summaries for an inbox:

```ts
import { MailinatorClient, GetInboxRequest, Sort } from 'mailinator-client';

const client = new MailinatorClient(process.env.MAILINATOR_API_TOKEN as string);

(async () => {
  const resp = await client.request(
    new GetInboxRequest('your-domain.com', 'inboxName', 0, 50, Sort.DESC, true)
  );

  if (resp.result) {
    console.log('inbox messages:', resp.result.msgs);
  }
})();
```

## Get a full message from an inbox:

```ts
import { MailinatorClient, GetMessageRequest } from 'mailinator-client';

const client = new MailinatorClient(process.env.MAILINATOR_API_TOKEN as string);

(async () => {
  const resp = await client.request(new GetMessageRequest('your-domain.com', 'messageId'));
  console.log(resp.result); // Message object (typed)
})();
```

## Create a message for an inbox:

You can programmatically post a message to an inbox which is useful for testing or simulating incoming mail.

```ts
import { MailinatorClient, PostMessageRequest } from 'mailinator-client';

const client = new MailinatorClient(process.env.MAILINATOR_API_TOKEN as string);

type MsgPart = { type: string; body: string };
const msg = {
  from: 'sender@example.com',
  subject: 'Hello',
  parts: [{ type: 'text/plain', body: 'Hello world' }] as MsgPart[],
};

(async () => {
  const resp = await client.request(new PostMessageRequest('your-domain.com', 'inboxName', msg));
  console.log(resp.result); // PostedMessage info
})();
```

## Delete a message from an inbox:

There are multiple deletion patterns supported by the API. Here is how to delete a single message by ID:

```ts
import { MailinatorClient, DeleteMessageRequest } from 'mailinator-client';

const client = new MailinatorClient(process.env.MAILINATOR_API_TOKEN as string);

(async () => {
  const resp = await client.request(new DeleteMessageRequest('your-domain.com', 'inboxName', 'messageId'));
  console.log(resp.statusCode, resp.result);
})();
```

## Get attachments for a message from an inbox:

The attachment endpoint returns a Node.js IncomingMessage stream when used in Node. This example downloads the first attachment to a file named attachment.bin.

```ts
import { MailinatorClient, GetMessageAttachmentRequest } from 'mailinator-client';
import fs from 'fs';
import type { IncomingMessage } from 'http';

const client = new MailinatorClient(process.env.MAILINATOR_API_TOKEN as string);

(async () => {
  const resp = await client.request(new GetMessageAttachmentRequest('your-domain.com', 'messageId', 0));
  if (resp.result) {
    const stream = resp.result as unknown as IncomingMessage;
    stream.pipe(fs.createWriteStream('attachment.bin'));
  }
})();
```

## Get team statistics

Fetch various account-level statistics such as inbox usage and message volume. Stay under your account limits when using these endpoints.

```ts
import { MailinatorClient, GetStatsRequest } from 'mailinator-client';

const client = new MailinatorClient(process.env.MAILINATOR_API_TOKEN as string);

(async () => {
  const resp = await client.request(new GetStatsRequest());
  console.log(JSON.stringify(resp.result, null, 2));
})();
```

## Response handling

All SDK methods return an IRestResponse. A common pattern is to check the statusCode and inspect result on success. The result value is typed when available.

```ts
import { MailinatorClient, GetInboxRequest } from 'mailinator-client';
const client = new MailinatorClient(process.env.MAILINATOR_API_TOKEN as string);

(async () => {
  const res = await client.request(new GetInboxRequest('domain', 'inbox'));
  if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
    const inbox = res.result; // typed Inbox | undefined
    console.log(inbox);
  } else {
    console.error('Request failed', res.statusCode, res.result);
  }
})();
```

## Notes and tips

Store API tokens in environment variables and avoid hard-coding secrets. The SDK includes type definitions so your editor or IDE can provide auto-complete for Request classes and response shapes. Attachment responses return a Node stream and are not suitable for browser environments without adaptation.

## Where to look for more request types

The SDK organizes functionality under message, rule, domain, authenticator, stats, and webhook folders. Each folder contains Request classes for corresponding API endpoints. For a full list of requests and details, see the SDK repository:

https://github.com/mailinator/mailinator-javascript-client
