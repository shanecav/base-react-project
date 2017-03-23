const path = require('path')

const rootPath = path.resolve(__dirname, '../../')
const appPath = path.resolve(rootPath, 'app')
const devPath = path.resolve(rootPath, 'dev')
const distPath = path.resolve(rootPath, 'dist')

module.exports = {
  rootPath,
  appPath,
  devPath,
  distPath,
}
