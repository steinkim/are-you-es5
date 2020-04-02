import { getBabelLoaderIgnoreRegex, getBabelLoaderIncludeRegex, toRegExp } from '../src/babel-loader-regex-builder'

describe('getBabelLoaderIgnoreRegex', () => {
  it('returns a regex for ignoring dependencies', () => {
    const dependencies = ['dotenv', 'md5-file']
    const expectedRegex =
      '/[\\\\/]node_modules[\\\\/](?!(dotenv|md5-file)[\\\\/])/'

    expect(getBabelLoaderIgnoreRegex(dependencies)).toEqual(expectedRegex)
  })

  it('handles namespaced dependencies', () => {
    const dependencies = ['@react-pdf/renderer', 'dotenv', 'md5-file']
    const expectedRegex =
      '/[\\\\/]node_modules[\\\\/](?!(@react-pdf\\/renderer|dotenv|md5-file)[\\\\/])/'

    expect(getBabelLoaderIgnoreRegex(dependencies)).toEqual(expectedRegex)
  })
})

describe('getBabelLoaderIncludeRegex', () => {
  it('returns a regex for including dependencies', () => {
    const dependencies = ['dotenv', 'md5-file']
    const expectedRegex =
      '/[\\\\/]node_modules[\\\\/](dotenv|md5-file)[\\\\/]/'

    expect(getBabelLoaderIncludeRegex(dependencies)).toEqual(expectedRegex)
  })

  it('handles namespaced dependencies', () => {
    const dependencies = ['@react-pdf/renderer', 'dotenv', 'md5-file']
    const expectedRegex =
      '/[\\\\/]node_modules[\\\\/](@react-pdf\\/renderer|dotenv|md5-file)[\\\\/]/'

    expect(getBabelLoaderIncludeRegex(dependencies)).toEqual(expectedRegex)
  })
})

describe('toRegExp', () => {
  const regex = '/[\\\\/]node_modules[\\\\/](@react-pdf\\/renderer|dotenv|md5-file)[\\\\/]/'
  const expectedRegExp =
    new RegExp('[\\\\/]node_modules[\\\\/](@react-pdf\\/renderer|dotenv|md5-file)[\\\\/]')

  expect(toRegExp(regex)).toEqual(expectedRegExp)
})
