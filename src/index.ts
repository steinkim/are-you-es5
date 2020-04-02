import { ModulesChecker } from './modules-checker'
import IModuleCheckerConfig from './types/module-checker-config'

export default (path: string, config?: IModuleCheckerConfig) => {
  const checker = new ModulesChecker(path, config)
  const nonEs5Dependencies = checker.checkModules()

  return nonEs5Dependencies
}
