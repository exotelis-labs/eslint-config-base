# @exotelis-labs/eslint-config-base

> eslint-config-prettier for Vue

This config is primarily used by exotelis-labs projects.

## Installation

Please make sure that you have `prettier` and `eslint` installed.

```sh
npm i -D @exotelis-labs/eslint-config-base@latest eslint@latest prettier@latest eslint-plugin-prettier@latest

```

## Usage

Add `"@exotelis-labs/eslint-config-base"` to the `"extends"` array in your `.eslintrc.cjs` file. Make sure to put it
**last**, so it gets the chance to override other configs.

```js
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  extends: [
    // ... other configs
    "@exotelis-labs/eslint-config-base"
  ]
}
```
