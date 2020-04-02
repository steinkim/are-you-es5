export default interface IModulesRegExpConfig {
  type?: 'exclude' | 'include'
  checkAllNodeModules?: boolean
  ignoreBabelAndWebpackPackages?: boolean
}
