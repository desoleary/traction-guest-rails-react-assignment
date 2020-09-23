# Table of contents

* [Development](#development)
  * [NPM Commands](#npm-commands)
    * [Install Dependencies](#install-dependencies)
    * [Run](#run)
    * [Build](#build)
    * [Test](#test)
    * [Storybook](#storybook)
  * [VS Code](#vs-code)
    * [Prettier](#prettier)

# Pages
MST Jira 
 - Get Started
 - Global configuration
 - Project configuration
 - User configuration
 - Issue configuration

# Development

## NPM Commands

### Install Dependencies

```sh
npm install
```

### Run

```sh
npm start
```

### Build

Development build:

```sh
npm run build:dev
```

Production build:

```sh
npm run build:prod
```

### Test

Run tests and storybook-based snapshot tests:

```sh
npm test
```

Run tests and update snapshots:

```sh
npm run test:update
```

### Storybook

```
npm run storybook
```

## VS Code

The repo contains `.vscode` folder with shared settings.

### Prettier

To auto-format code on save install [prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
