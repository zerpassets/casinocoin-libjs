# casinocoin-libjs

A JavaScript API for interacting with Casinocoin in Node.js

[![Circle CI](https://circleci.com/gh/casinocoin/casinocoin-libjs/tree/develop.svg?style=svg)](https://circleci.com/gh/casinocoin/casinocoin-libjs/tree/develop) [![Coverage Status](https://coveralls.io/repos/casinocoin/casinocoin-libjs/badge.png?branch=develop)](https://coveralls.io/r/casinocoin/casinocoin-libjs?branch=develop)

[![NPM](https://nodei.co/npm/casinocoin-libjs.png)](https://www.npmjs.org/package/casinocoin-libjs)

### Features

+ Connect to a `casinocoind` server from Node.js or a web browser
+ Helpers for creating requests and parsing responses for the [casinocoind API](https://casinocoin.org/build/reference-casinocoind.html)
+ Listen to events on the CSC Ledger (transactions, ledger, validations, etc.)
+ Sign and submit transactions to the CSC Ledger
+ Type definitions for TypeScript

## Getting Started

See also: [CasinocoinAPI Beginners Guide](https://casinocoin.org/build/tutorial-casinocoinapi-beginners-guide.html)

### Requirements

+ **[Node v10](https://nodejs.org/)** is recommended. Other versions may work but are not frequently tested.
+ **[Yarn](https://yarnpkg.com/)** is recommended. `npm` may work but we use `yarn.lock`.

### Install

In an existing project (with `package.json`), install `casinocoin-libjs`:
```
$ yarn add casinocoin-libjs
```

Then see the [documentation](https://github.com/casinocoin/casinocoin-libjs/blob/develop/docs/index.md) and [code samples](https://github.com/casinocoin/casinocoin-libjs/tree/develop/docs/samples).

## Development

To build the library for Node.js:
```
$ yarn compile
```

The TypeScript compiler will [output](./tsconfig.json#L7) the resulting JS files in `./dist/npm/`.

To build the library for the browser:
```
$ yarn build
```

Gulp will [output](./Gulpfile.js) the resulting JS files in `./build/`.

For details, see the `scripts` in `package.json`.

## Running Tests

1. Clone the repository
2. `cd` into the repository and install dependencies with `yarn install`
3. `yarn test`

Also, run `yarn lint` to lint the code with `tslint`.

## Generating Documentation

The continuous integration tests require that the documentation stays up-to-date. If you make changes to the JSON schemas, fixtures, or documentation sources, you must update the documentation by running `yarn run docgen`.

## More Information

+ [Casinocoin Developer Center](https://casinocoin.org/build/)


