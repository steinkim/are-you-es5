import IModulesRegExpConfig, {
  defaultConfig
} from './types/modules-regexp-config'
import { ModulesChecker } from './modules-checker'
import {
  getBabelLoaderIncludeRegex,
  getBabelLoaderIgnoreRegex,
  toRegExp
} from './babel-loader-regex-builder'
import IModuleCheckerConfig from './types/module-checker-config'

export function nonES5Modules(config: IModuleCheckerConfig) {
  const checker = new ModulesChecker('.', config)
  const nonEs5Modules = checker.checkModules()

  return nonEs5Modules
}

function nonES5ModulesRegex(config: IModulesRegExpConfig) {
  const { type, ...restConfig } = config
  const nonEs5Modules = nonES5Modules(restConfig)

  if (type === 'include') {
    return getBabelLoaderIncludeRegex(nonEs5Modules)
  }
  return getBabelLoaderIgnoreRegex(nonEs5Modules)
}

export function nonES5ModulesRegExp(config?: IModulesRegExpConfig) {
  return toRegExp(nonES5ModulesRegex({ ...defaultConfig, ...config }))
}
