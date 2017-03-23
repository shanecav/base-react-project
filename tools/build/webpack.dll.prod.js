var path = require('path')
var webpack = require('webpack')
const merge = require('webpack-merge')

const webpackBaseConfig = require('./webpack.dll.base')
const { distPath } = require('./paths')

module.exports = merge(webpackBaseConfig, {
  output: {
    path: path.resolve(distPath, 'dll'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
})
