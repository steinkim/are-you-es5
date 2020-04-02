import { nonES5Modules, nonES5ModulesRegExp } from '../src';
import { ModulesChecker } from '../src/modules-checker'

describe('nonES5Modules', () => {
  const mockGetDepsFromRootPackageJson = (dependencies: any[]) => {
    ModulesChecker.prototype.getDeps = jest
      .fn()
      .mockImplementationOnce(() => dependencies)
  }

  it('returns an empty array if no dependencies could be retrieved', () => {
    mockGetDepsFromRootPackageJson(null)

    expect(nonES5Modules({checkAllNodeModules: false})).toEqual([])
  })

  it('returns an array of non-es5 dependencies', () => {
    const dependencies = ['acorn', 'commander']
    mockGetDepsFromRootPackageJson(dependencies)

    const mockIsScriptEs5 = (ModulesChecker.prototype.isScriptEs5 = jest
      .fn()
      .mockImplementationOnce(() => true)).mockImplementationOnce(() => false)

    expect(nonES5Modules({checkAllNodeModules: false})).toEqual(['commander'])
  })
})

describe('nonES5ModulesRegExp', () => {
  const mockGetDepsFromRootPackageJson = (deps: any[]) => {
    ModulesChecker.prototype.getDeps = jest
      .fn()
      .mockImplementationOnce(() => deps)
  }
  beforeEach(() => {
    const mockIsScriptEs5 = (ModulesChecker.prototype.isScriptEs5 = jest
      .fn()
      .mockImplementationOnce(() => true)).mockImplementationOnce(() => false)
  })
  it('when type equal to exclude', () => {
    const dependencies = ['acorn', 'commander']
    mockGetDepsFromRootPackageJson(dependencies)
    expect(nonES5ModulesRegExp({ checkAllNodeModules: false })).toEqual(/[\\/]node_modules[\\/](?!(commander)[\\/])/);
  })

  it('when type equal to include', () => {
    const dependencies = ['acorn', 'commander']
    mockGetDepsFromRootPackageJson(dependencies)
    expect(nonES5ModulesRegExp({ type: 'include', checkAllNodeModules: false })).toEqual(/[\\/]node_modules[\\/](commander)[\\/]/);
  })
})