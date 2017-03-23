const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const merge = require('webpack-merge')

const webpackBaseConfig = require('./webpack.config.base')
const { devPath } = require('./paths')

module.exports = merge(webpackBaseConfig, {
  devtool: 'cheap-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './app/index.js',
  ],
  output: {
    path: devPath,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
  ],
})
