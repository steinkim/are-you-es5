# are-you-es5
A package to help you find out which of your `node_modules` aren't written in ES5 so you can add them to your Webpack/Rollup/Parcel  transpilation steps. This is currently [limited to checking the entrypoint scripts only](https://github.com/obahareth/are-you-es5/issues/2), which **might** actually be enough of a check to determine if a package should be transpiled or not.

## Installing

```bash
yarn add are-you-es5@steinkim/are-you-es5 --dev
npm install add are-you-es5@steinkim/are-you-es5 --save-dev
```
## Usage

```javascript
const getNonES5Modules = require('are-you-es5').default;

getNonES5Modules('.')
getNonES5Modules('.', options)
```

### options

```typescript
interface IModuleCheckerConfig {
    logEs5Packages?: boolean;
    checkAllNodeModules?: boolean;
    ignoreBabelAndWebpackPackages?: boolean;
}
```
