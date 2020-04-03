export default interface IModulesRegExpConfig {
  type?: 'exclude' | 'include'
  checkAllNodeModules?: boolean
  ignoreBabelAndWebpackPackages?: boolean
}

export const defaultConfig: IModulesRegExpConfig = {
  type: 'exclude',
  checkAllNodeModules: true,
  ignoreBabelAndWebpackPackages: true
}
