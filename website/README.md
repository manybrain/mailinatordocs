# Website

This Website Docs are built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Directory

```text
website/
├── blog/
│   └── Not used
├── docs/
│   ├── api/
│   ├── core/
│   ├── guides/
│   ├── sdks/
│   ├── webhooks/
│   ├── GettingAround
│   ├── Intro
│   ├── SSO
│   └── Add and update docs here
├── scripts/
│   └── Build scripts
├── src/
├── static/
│   ├── img/
│   └── Put images here
├── docusaurus.config.js
│   └── Primary configuration
├── sidebars.js
│   └── Menu configuration
├── package.json
└── README
```

### Directory Legend

1. When the project is built, a new directory called `/build` will appear. This is where we will serve files from.
2. All docs for the site should go under `/docs` and into it's respective directory. 
3. The API reference docs in `/docs/api` are all auto-generated except for `/docs/api/index.md`.

## Adding New Pages

When you want to add new documentation pages (Not API):

1. Create a markdown file in the `/docs` directory. Feel free to create a directory as needed.
2. Make sure that page has "front matter" that includes an id and title such as:

```bash
---
id: messagedelivery
title: Message Delivery
---
```

3. Add the pages to `sidebars.js` using the id from the front matter. Feel free to create additional categories. (If you want to move pages, do it here as well as in the file directory.)

## Local Development

### Installation

```bash
npm install
```

### API Updates

Run the API generator whenever the OpenAPI spec changes, then start Docusaurus:

```bash
npm run update-api-docs   # regenerates docs/api and sidebar
npm run start             # launches http://localhost:3000
```

The dev server hot-reloads most edits automatically.

*Note: API docs are static files in the `/docs/api/` folder and are under version control.*

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
