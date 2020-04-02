"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function escapeNamespacedDependencies(dependencies) {
    return dependencies.map(dep => dep.replace('/', '\\/'));
}
function dependenciesUnionRegex(dependencies) {
    return escapeNamespacedDependencies(dependencies).join('|');
}
function getBabelLoaderIgnoreRegex(dependencies) {
    // [\\\\/] is a bit confusing but what it's doing is matching either a
    // backslash or forwards slash. Forwards slashes don't need to be
    // escaped inside a character group, and we need to escape the
    // backslash twice because we're in a string, and in a regex.
    //
    // If you console.log the regex it'll actually turn into:
    // [\\/]
    return `/[\\\\/]node_modules[\\\\/](?!(${dependenciesUnionRegex(dependencies)})[\\\\/])/`;
}
exports.getBabelLoaderIgnoreRegex = getBabelLoaderIgnoreRegex;
function getBabelLoaderIncludeRegex(dependencies) {
    return `/[\\\\/]node_modules[\\\\/](${dependenciesUnionRegex(dependencies)})[\\\\/]/`;
}
exports.getBabelLoaderIncludeRegex = getBabelLoaderIncludeRegex;
function toRegExp(regex) {
    return new RegExp(regex.substring(1, regex.length - 1));
}
exports.toRegExp = toRegExp;
//# sourceMappingURL=babel-loader-regex-builder.js.map