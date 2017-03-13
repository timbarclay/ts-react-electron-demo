# Typescript React/Redux Electron Starter

A little starter package for scaffolding React & Redux based Electron apps written in Typescript and build with Webpack.

## Running locally

* Make sure you have electron `npm install -g electron` and typings `npm install -g typings`
* Clone repo and `cd` into it
* `npm install` and `typings install`
* `npm start`

## Todo

- [ ] Add testing (Mocha, Chai, Enzyme)
- [ ] Add [React Storybook](https://getstorybook.io/) (maybe - I might not bother with this)
- [ ] Add support for building/packaging cross platform apps (options include [electron-builder](https://github.com/electron-userland/electron-builder) and [electron-packager](https://github.com/electron-userland/electron-packager))

## Other useful packages/reading

* [Keyboard shortcuts](https://github.com/parro-it/electron-localshortcut)
* [Local JSON storage](https://github.com/jviotti/electron-json-storage)
* [Embedded JS database](https://github.com/louischatriot/nedb)
* [Logging](https://github.com/megahertz/electron-log)
* [electron-redux](https://github.com/hardchor/electron-redux) middleware for keeping main and renderer stores in sync
* [Redux: Think vs Saga](http://blog.jakegardner.me/redux-thunk-vs-saga/). Currently using Thunk but might be good to reassess at some point
  * There's also [Redux Promise Middleware](https://github.com/pburtchaell/redux-promise-middleware)

#### License [CC0 1.0 (Public Domain)](LICENSE.md)
