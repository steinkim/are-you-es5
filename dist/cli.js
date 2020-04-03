#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const babel_loader_regex_builder_1 = require("./babel-loader-regex-builder");
const modules_checker_1 = require("./modules-checker");
commander_1.default
    .version('1.3.3')
    .command('check <path>')
    .description('Checks if all node_modules (including monorepos) at <path> are ES5')
    .option('-a, --all', 'Check all node_modules instead of just direct dependencies')
    .option('-v, --verbose', 'Log all messages (including modules that are ES5)')
    .option('--no-regex-filtering', 'Stops all filtering on babel-loader exclude regex (does not hide anything) ')
    .option('-r, --regex', 'Get babel-loader exclude regex to ignore all node_modules except non-ES5 ones, by default does not show any babel or webpack modules, use with --no-regex-filtering if you want to see everything')
    .action((path, cmd) => {
    const config = {
        checkAllNodeModules: cmd.all === true,
        ignoreBabelAndWebpackPackages: cmd.regexFiltering,
        logEs5Packages: cmd.verbose === true
    };
    const checker = new modules_checker_1.ModulesChecker(path, config, true);
    const nonEs5Dependencies = checker.checkModules();
    if (cmd.regex) {
        console.log('\n\nBabel-loader exclude regex:');
        console.log(babel_loader_regex_builder_1.getBabelLoaderIgnoreRegex(nonEs5Dependencies));
    }
});
commander_1.default.parse(process.argv);
//# sourceMappingURL=cli.js.map