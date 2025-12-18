# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development

Run the API generator whenever the OpenAPI spec changes, then start Docusaurus:

```bash
npm run update-api-docs   # regenerates docs/api and sidebar
npm run start             # launches http://localhost:3000
```

The dev server hot-reloads most edits automatically.

## Build

1. Regenerate API docs and sidebar.
2. Build the static site.

```bash
npm run update-api-docs
npm run build
```

The build artifacts land in `build/` and can be deployed to any static host.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
