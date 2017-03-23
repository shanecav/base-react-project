const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

const webpackBaseConfig = require("./webpack.config.base");
const { rootPath, appPath, distPath } = require("./paths");

module.exports = merge(webpackBaseConfig, {
  devtool: "cheap-source-map",
  entry: ["./app/index.js"],
  output: {
    path: distPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["strip-loader?strip[]=console.log"],
        include: [appPath]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
});
