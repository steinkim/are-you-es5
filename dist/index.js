"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const modules_checker_1 = require("./modules-checker");
const babel_loader_regex_builder_1 = require("./babel-loader-regex-builder");
const defaultConfig = {
    type: 'exclude',
    checkAllNodeModules: true,
    ignoreBabelAndWebpackPackages: true,
};
function nonES5Modules(config) {
    const checker = new modules_checker_1.ModulesChecker('.', config);
    const nonEs5Modules = checker.getNonEs5Deps();
    return nonEs5Modules;
}
exports.nonES5Modules = nonES5Modules;
function nonES5ModulesRegex(config) {
    const { type } = config, restConfig = __rest(config, ["type"]);
    const nonEs5Modules = nonES5Modules(restConfig);
    if (type === 'include') {
        return babel_loader_regex_builder_1.getBabelLoaderIncludeRegex(nonEs5Modules);
    }
    return babel_loader_regex_builder_1.getBabelLoaderIgnoreRegex(nonEs5Modules);
}
function nonES5ModulesRegExp(config = defaultConfig) {
    return babel_loader_regex_builder_1.toRegExp(nonES5ModulesRegex(config));
}
exports.nonES5ModulesRegExp = nonES5ModulesRegExp;
//# sourceMappingURL=index.js.map