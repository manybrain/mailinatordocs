---
id: ruby-and-javascript-1.1.0
---

# Ruby and JavaScript v1.1.0

After we overhauled our [documentation](https://www.mailinator.com/new-mailinator-documentation/), it was time to bring our SDKs up to date. Our API functionality had grown but those changes hadn't made it into the SDKs. 

Both Ruby and JavaScript SDKs are up to date with our APIs and OpenAPI specification. Please upgrade to version 1.1.0 as soon as possible:

- `npm install mailinator-client@1.1.0` for JavaScript
- `gem install mailinator_client -v 1.1.0` for Ruby

There are no breaking changes, just bug fixes and new functionality.


## What Changed

1. Added Functionality: We’ve added the ability to [stream all messages](https://www.mailinator.com/documentation/docs/api/stream-domain-messages/index.html) that come to your domain or inbox. More recently we began offering new ways to pull data directly from a message for text content, text/plain, text/html, headers, etc. Now our SDKs support all of it. 
2. Bug Fixes
3. Matching the Specification: We maintain an [OpenAPI specification](https://github.com/manybrain/mailinatordocs/blob/main/openapi/mailinator-api.yaml). In addition to documenting what our API can do, we also use it to generate the actual API documentation. Now we’re matching our SDKs to the specification. If the spec has it, so should the SDK and vice versa.
4. Deprecated Classes: We're removing the ability to create and delete domains programmatically. We're also removing the ability to manage rules programmatically. All of this functionality will remain available in the Mailinator interface. 
   - All classes related to Rules are deprecated and in the future will be removed.
   - Create and Delete Domain classes are deprecated and in the future will be removed
   - Check each SDK’s changelog for the full list of deprecated classes and methods
5. Deprecation Warnings: Where allowed, we've marked versions older than a year ago as deprecated, providing warnings to users.

## Next Updates

Next updates are coming to our Java, C# and Python libraries! 

## Find the Latest Information

For specific details, developers should refer to the official documentation and source code repositories:

- [JavaScript SDK Changelog](https://github.com/manybrain/mailinator-javascript-client/blob/master/CHANGELOG.md) for the latest updates and changes to the JavaScript SDK.
- [Ruby SDK Changelog](https://github.com/manybrain/mailinator-ruby-client/blob/main/CHANGELOG.md) for the latest updates and changes to the Ruby SDK.
- [Official Mailinator Documentation](https://www.mailinator.com/documentation/docs/intro) for comprehensive guides and API references.
- [Mailinator Blog](https://www.mailinator.com/blog/) for general feature updates and announcements.