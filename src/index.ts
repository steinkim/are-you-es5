import IModulesRegExpConfig from "./types/modules-regexp-config";
import { ModulesChecker } from "./modules-checker";
import { getBabelLoaderIncludeRegex, getBabelLoaderIgnoreRegex, toRegExp } from "./babel-loader-regex-builder";
import IModuleCheckerConfig from "./types/module-checker-config";

const defaultConfig: IModulesRegExpConfig = {
  type: 'exclude',
  checkAllNodeModules: true,
  ignoreBabelAndWebpackPackages: true,
}

export function nonES5Modules(config: IModuleCheckerConfig) {
  const checker = new ModulesChecker('.', config);
  const nonEs5Modules = checker.getNonEs5Deps();

  return nonEs5Modules;
}

function nonES5ModulesRegex(config: IModulesRegExpConfig) {
  const {type, ...restConfig} = config;
  const nonEs5Modules = nonES5Modules(restConfig)

  if (type === 'include') {
    return getBabelLoaderIncludeRegex(nonEs5Modules);
  }
  return getBabelLoaderIgnoreRegex(nonEs5Modules);
}

export function nonES5ModulesRegExp(config: IModulesRegExpConfig = defaultConfig) {
  return toRegExp(nonES5ModulesRegex(config));
}