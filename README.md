# are-you-es5
[![](https://img.shields.io/npm/v/@steinkim/are-you-es5)](https://www.npmjs.com/package/@steinkim/are-you-es5)
![](https://img.shields.io/node/v/@steinkim/are-you-es5.svg?style=popout)


A package to help you find out which of your `node_modules` aren't written in ES5 so you can add them to your Webpack/Rollup/Parcel transpilation steps. This is currently [limited to checking the entrypoint scripts only](https://github.com/obahareth/are-you-es5/issues/2)

## Install

```bash
npm install --save-dev @steinkim/are-you-es5
yarn add --dev @steinkim/are-you-es5
```

## Usage

### In Webpack Config

This is how you include non-ES5 modules to be processed by babel-loader.

```javascript
// webpack.config.js
const {nonES5ModulesRegExp} = require('@steinkim/are-you-es5');

module.exports = {
  // ...
  module: {
      // ...
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: [nonES5ModulesRegExp({type: 'exclude'})]
          loader: 'babel-loader',
        },
        // ...
      ],
    },
}
```


```javascript
// webpack.config.js
const {nonES5ModulesRegExp} = require('@steinkim/are-you-es5');

module.exports = {
  // ...
  module: {
      // ...
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname, 'src'), // it should be YOUR src directory
            nonES5ModulesRegExp({type: 'include'}),
          ],
          loader: 'babel-loader',
        },
        // ...
      ],
    },
}
```

### CLI

```
Usage: are-you-es5 check [options] <path>

Checks if all node_modules (including monorepos) at <path> are ES5

Options:
  -a, --all             Check all node_modules instead of just direct dependencies
  -v, --verbose         Log all messages (including modules that are ES5)
  --no-regex-filtering  Stops all filtering on babel-loader exclude regex (does not hide anything)
  -r, --regex           Get babel-loader exclude regex to ignore all node_modules except non-ES5 ones, by default does not show any babel or webpack modules, use with --no-regex-filtering if you want to see everything
  -h, --help            output usage information
```

#### Example

```bash
are-you-es5 check /path/to/some/repo -r
❌ @babel/plugin-1 is not ES5
❌ @babel/plugin-2 is not ES5

Babel-loader exclude regex:

/node_modules/(?![plugin-1|plugin-2])/
```

## Credits

- [acorn](https://github.com/acornjs/acorn) - All the actual ES5 checking happens through acorn, this package wouldn't exist without it.
- [es-check](https://github.com/dollarshaveclub/es-check) - This whole package wouldn't have been possible if I hadn't come across es-check and learned from it.

