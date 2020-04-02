"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules_checker_1 = require("./modules-checker");
exports.default = (path, config) => {
    const checker = new modules_checker_1.ModulesChecker(path, config);
    const nonEs5Dependencies = checker.checkModules();
    return nonEs5Dependencies;
};
//# sourceMappingURL=index.js.map