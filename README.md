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

------------------------------------

### Config

Add `webpack.config.js` in main root to customize Webpack.

This file will automatically call by Webpack using `npx webpack --config webpack.config.js` command.


------------------------------------

### Loaders

There are a lot of loaders that you can intall and use inside `webpack.config.js`.

These allow to manage different types of files.


------------------------------------

### Plugins

#### HtmlWebpackPlugin

This plugin, used to copy `index.html` inside `dist/` folder, is broken with `ts-loader` (https://github.com/jantimon/html-webpack-plugin/issues/1097):

```
Types of parameters 'compiler' and 'compiler' are incompatible.

 TS2322: Type 'this' is not assignable to type 'HtmlWebpackPlugin'.
```

Temporarily replace `ts-loader` with `awesome-typescript-loader` it in project.

This one emit another type of errors, but works:

```
ERROR in [at-loader] ./node_modules/@types/uglify-js/index.d.ts:9:30 
    TS2307: Cannot find module 'source-map'.

ERROR in [at-loader] ./node_modules/@types/webpack-sources/index.d.ts:10:62 
    TS2307: Cannot find module 'source-map'.

ERROR in [at-loader] ./node_modules/@types/webpack/index.d.ts:47:30 
    TS2307: Cannot find module 'source-map'.
```

------------------------------------

## Resources

- https://www.youtube.com/watch?v=gm9kM-ZM5rE&list=PLRLvivu3C8b1J_sGK4qmXTDkoHInSXYBy&index=1 (and all videos)