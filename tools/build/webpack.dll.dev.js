var path = require('path')
const merge = require('webpack-merge')

const webpackBaseConfig = require('./webpack.dll.base')
const { devPath } = require('./paths')

module.exports = merge(webpackBaseConfig, {
  output: {
    path: path.resolve(devPath, 'dll'),
  },
})
