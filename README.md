# Mailinator Documentation 

The new Mailinator documentation site is self-hosted using Docusaurus. This directory contains all the things needed to update and maintain the documents going forward.

## Directory Structure

```text
mailinatordocs/
├── api-examples/
│   └── ruby, python, js, etc.
├── openapi/
│   └── mailinator-api.yaml
├── website/
│   ├── blog/
│   ├── docs/
│   ├── scripts/
│   ├── src/
│   ├── static/
│   ├── README
│   ├── sidebars.js
│   ├── package.json
│   └── docusaurus.config.js
└── README
```

## Documentation

Our API and Product documentation are using Docusaurus. To find out more about how to configure, build and run the documentation, read its [README](/website/README.md).


## OpenAPI Specification

The OpenAPI (Swagger) specification is **THE** single source of truth for the API docs. Any changes (bugs, updates, etc.) should be made directly to the specification. Once that is done, new API docs can be generated. 

### Test your updates

After making an update to the specification, run the following linter to make sure you didn't introduce any errors. (Warnings are ok). Introducing errors might cause the API documentation to break.

`npx @redocly/cli lint openapi/mailinator-api.yaml`


## Example API Library

In the [api examples directory](https://github.com/manybrain/mailinatordocs/tree/main/api-examples) are code examples taken from our old API docs. The new docs don't yet provide examples for all of the languages we support. 

Note: No guarantee these code examples are accurate.

### Old Documentation Site

The [old documentation site](https://github.com/manybrain/m8rdocs) still lives here but is out of date.


