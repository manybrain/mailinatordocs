# Mailinator Documentation 

The new Mailinator documentation site is hosted on GitBook. The majority of the pages live on GitBook except for the API Reference, which is dynamically pulled from this directory. 

## OpenAPI Specification

In the [openapi directory](https://github.com/manybrain/mailinatordocs/tree/main/openapi) is the OpenAPI specification for Mailinator's API. Any changes (bugs, updates, etc.) need to be made directly to that file. GitBook will refresh that connection and automatically pull in changes to the website. 

## Example API Library

In the [api examples directory](https://github.com/manybrain/mailinatordocs/tree/main/api-examples) are code examples taken from our old API docs. The new docs don't yet provide examples for all of the languages we support. 

Note: No guarantee these code examples are accurate.

## Old Documentation Site

The [old documentation site](https://github.com/manybrain/m8rdocs) still lives here but is out of date.


### Linting

After making an update, run the following linter to make sure you didn't introduce any errors. (Warnings are ok). Introducing errors will cause the API documentation to break.

`npx @redocly/cli lint openapi/mailinator-api.yaml`