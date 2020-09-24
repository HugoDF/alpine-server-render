# Alpine.js Server Render

> A server/static renderer for Alpine.js templates

## Installation

```
npm install --save alpine-server-render
# or with Yarn
yarn add alpine-server-render
```

Then in a JavaScript/TypeScript file:

```js
const {render, load} = require('alpine-server-render');
// or using ESM imports
import {render, load} from 'alpine-server-render';
```

## Usage

Straight render:

```js
const html = render(`<div x-data="{ msg: 'Hello' }" x-text="msg"></div>`);
// `<div x-data="{ msg: 'Hello' }" x-text="msg">Hello</div>`
```

With Alpine.js attributes/templates stripped:

```js
const html = render(`<div x-data="{ msg: 'Hello' }" x-text="msg"></div>`, { strip: true });
// `<div>Hello</div>`
```

With overriding of top-level x-data:

```js
const html = render(
  `<div x-data="{ msg: 'Hello' }" x-text="msg"></div>`,
  {data: {msg: 'testing message'}, strip: true}
);
// '<div>testing message</div>'
```


## Requirements

- Node 10+
- Yarn 1.x or npm

## Setup

1. Clone the repository
2. Run `yarn` or `npm install` installs all required dependencies.

## npm scripts

> Equivalent `npm run <script>` should also work

- `yarn lint` will lint all of the files with [xo](https://github.com/xojs/xo)
- `yarn format` will run lint with `--fix` option on all the examples files (and tests).

## LICENSE

Code is licensed under the [MIT License](./LICENSE).

