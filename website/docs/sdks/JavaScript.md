---
id: javascript-sdk
title: How to use the JavaScript SDK
---

# How to use the JavaScript SDK

This page shows how to use the Mailinator JavaScript SDK, with examples taken from the official SDK repository.

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

## Basic concepts

- The SDK exposes a single client class: MailinatorClient.
- All API calls are represented as Request classes (implementing Request or RequestWithoutToken).
- Use MailinatorClient.request(request) to execute requests that require an API token.
- Use MailinatorClient.requestWithoutToken(request) to execute tokenless requests (rare; e.g. certain webhook endpoints).
- All requests return a Promise resolving to an IRestResponse (usually containing statusCode and result).

## Create a client

```javascript
const { MailinatorClient } = require('mailinator-client');

const client = new MailinatorClient('YOUR_API_TOKEN');
```

If you need to call endpoints that don't require an API token, create the client without a token and call requestWithoutToken:

```javascript
const clientNoToken = new MailinatorClient();
```

## Get all message summaries for an inbox:

Get all message summaries for an inbox, with optional pagination and sorting.

```javascript
const { MailinatorClient, GetInboxRequest, Sort } = require('mailinator-client');

const client = new MailinatorClient('YOUR_API_TOKEN');

(async () => {
    const resp = await client.request(
        new GetInboxRequest('your-domain.com', 'inboxName', /*skip*/0, /*limit*/50, Sort.DESC, /*decodeSubject*/true)
    );

    if (resp.result) {
        console.log('inbox messages:', resp.result.msgs);
    }
})();
```

## Get a full message from an inbox:

Get a single message by ID, including all metadata and content parts.

```javascript
const { MailinatorClient, GetMessageRequest } = require('mailinator-client');

const client = new MailinatorClient('YOUR_API_TOKEN');

(async () => {
    const resp = await client.request(new GetMessageRequest('your-domain.com', 'messageId'));
    console.log(resp.result); // Message object
})();
```

## Create a message for an inbox:

You can post (create) a new message in an inbox, which is useful for testing or simulating incoming mail.

```javascript
const { MailinatorClient, PostMessageRequest } = require('mailinator-client');

const client = new MailinatorClient('YOUR_API_TOKEN');

const msg = {
    from: 'sender@example.com',
    subject: 'Hello',
    parts: [{ type: 'text/plain', body: 'Hello world' }]
};

(async () => {
    const resp = await client.request(new PostMessageRequest('your-domain.com', 'inboxName', msg));
    console.log(resp.result); // PostedMessage info
})();
```

## Delete a message from an inbox:

There are many ways to delete a message from an inbox (by message ID, auto-delete after getting, delete all messages in an inbox, etc). Here's how to delete a single message by ID:

```javascript
const { MailinatorClient, DeleteMessageRequest } = require('mailinator-client');

const client = new MailinatorClient('YOUR_API_TOKEN');

(async () => {
    const resp = await client.request(new DeleteMessageRequest('your-domain.com', 'inboxName', 'messageId'));
    console.log(resp.statusCode, resp.result);
})();
```

## Get attachments for a message from an inbox:

Get (and then download) an attachment for a message. 

```javascript
const { MailinatorClient, GetMessageAttachmentRequest } = require('mailinator-client');
const fs = require('fs');

const client = new MailinatorClient('YOUR_API_TOKEN');

(async () => {
    const resp = await client.request(new GetMessageAttachmentRequest('your-domain.com', 'messageId', 0));
    if (resp.result) {
        // resp.result is an IncomingMessage (Node.js HTTP stream)
        resp.result.pipe(fs.createWriteStream('attachment.bin'));
    }
})();
```

## Get team statistics:

Get various statistics about your Mailinator account, including inbox usage, message volume, and more. Make sure to stay under your limits!

```javascript
const { MailinatorClient, GetStatsRequest } = require('mailinator-client');

const client = new MailinatorClient('YOUR_API_TOKEN');

(async () => {
    const resp = await client.request(new GetStatsRequest());
    console.log(JSON.stringify(resp.result, null, 2));
})();
```

## Response handling

All SDK methods return an IRestResponse. Typical usage:

```javascript
const { MailinatorClient, GetInboxRequest } = require('mailinator-client');
const client = new MailinatorClient('YOUR_API_TOKEN');

(async () => {
    const res = await client.request(new GetInboxRequest('domain', 'inbox'));
    if (res.statusCode >= 200 && res.statusCode < 300) {
        const inbox = res.result; // typed Inbox | undefined
        console.log(inbox);
    } else {
        console.error('Request failed', res.statusCode, res.result);
    }
})();
```

## Notes & tips

- Use environment variables for your API token and avoid hard-coding secrets. We hard coded the token in examples for clarity, but in production use `process.env.MAILINATOR_API_TOKEN` or similar.
- The SDK includes type definitions; refer to your editor/IDE for auto-complete on Request classes and response shapes.
- Attachment responses return a Node stream (IncomingMessage) and are not suitable for browser environments without adaptation.


## Where to look for more request types

The SDK organizes functionality in the `message`, `rule`, `domain`, `authenticator`, `stats`, and `webhook` folders. Each contains Request classes for corresponding API endpoints. For a full list of requests and details, see the SDK repository:

https://github.com/mailinator/mailinator-javascript-client
