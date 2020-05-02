# Try Webpack + TypeScript

> This repository is used to try webpack without the use of some CLI as in Angular.

> After that this repository will be use to test new TypeScript features.

## WebPack

Install dependencies

```
npm i --save-dev webpack
npm i --save-dev webpack-cli
```

Run `npx webpack` generate a `dist/` with inside `main.js` file generated from `src/index.js`.


### Config

Add `webpack.config.js` in main root to customize Webpack.

This file will automatically call by Webpack using `npx webpack --config webpack.config.js` command.


### Loader

There are a lot of loaders that you can intall and use inside `webpack.config.js`.

These allow to manage different types of files.

## Resources

- https://www.youtube.com/watch?v=gm9kM-ZM5rE&list=PLRLvivu3C8b1J_sGK4qmXTDkoHInSXYBy&index=1 (and all videos)