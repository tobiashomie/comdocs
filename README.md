<h1 align="center">
  <a href="https://docs.commune.ai">
    <img alt="CommuneAI Logo" width=100px src="./static/img/commune-logo.svg" />
  </a>
</h1>
<h2 align="center">CommuneAI Developer Docs</h2>
<h3 align="center">https://comdocs.netlify.app</h3>

-----------------------------------------------------------------------------

Welcome to CommuneAI Developer Docs. These docs are built using [Docusaurus](https://docusaurus.io/). See the below instructions to build these docs locally.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
