# Typescript React/Redux Electron Starter

A little starter package for scaffolding React & Redux based Electron apps written in Typescript and build with Webpack.

## Features

This package uses Typescript, React, Redux, Webpack 2 and Babili (so we can use Webpack's [tree-shaking](https://github.com/blacksonic/typescript-webpack-tree-shaking)). All the code goes inside `src` with stuff to do with the main process in `src/main` and stuff to do with the renderer processes in `src/renderer`. 

All React stuff lives in `src/renderer/ui`. `src/renderer/ui/rootReducer.ts` contains the root Redux reducer as well as an interface that defines the 'state shape'. Individual, reusable React components live in `components` along with their styles and their Redux actions and reducers while Redux container components (i.e where `mapStateToProps` functions etc happen) are in `containers`. 

Non-UI related front end code lives in `src/renderer/application`.

Tests use Mocha, Chai, Sinon and Enzyme (for testing React components). All tests live in `test`. There is a `tsconfig.test.json` just for the Mocha tests which tells the TS compiler to target ES5 instead of ES2015.

## Running locally

* Make sure you have electron `npm install -g electron`
* Clone repo and `cd` into it
* `npm install`
* `npm start`

To run the tests

* `npm run test`

## Todo

- [x] Add testing (Mocha, Chai, Enzyme)
- [ ] Add [React Storybook](https://getstorybook.io/) (maybe - I might not bother with this)
- [ ] Add support for building/packaging cross platform apps (options include [electron-builder](https://github.com/electron-userland/electron-builder) and [electron-packager](https://github.com/electron-userland/electron-packager))
- [ ] Figure out if I actually need `.babelrc` and `babel-preset-env` for Babili to work properly with Typescript and Webpack
- [ ] Update babili to babel-minify

## Other useful packages/reading

* [Keyboard shortcuts](https://github.com/parro-it/electron-localshortcut)
* [Local JSON storage](https://github.com/jviotti/electron-json-storage)
* [Embedded JS database](https://github.com/louischatriot/nedb)
* [Logging](https://github.com/megahertz/electron-log)
* [electron-redux](https://github.com/hardchor/electron-redux) middleware for keeping main and renderer stores in sync
* [Redux: Think vs Saga](http://blog.jakegardner.me/redux-thunk-vs-saga/). Currently using Thunk but might be good to reassess at some point
  * There's also [Redux Promise Middleware](https://github.com/pburtchaell/redux-promise-middleware)

#### License [CC0 1.0 (Public Domain)](LICENSE.md)
