var path = require("path");
var webpack = require("webpack");
const HappyPack = require("happypack");

const { rootPath, appPath } = require("./paths");

module.exports = {
  devtool: "cheap-source-map",
  entry: {
    vendor: [path.resolve(appPath, "vendors.js")]
  },
  output: {
    filename: "dll.[name].js",
    library: "[name]"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["happypack/loader"]
      }
    ]
  },
  plugins: [
    new HappyPack({
      loaders: ["babel-loader"]
    }),
    new webpack.DllPlugin({
      path: path.resolve(rootPath, "dll", "[name]-manifest.json"),
      name: "[name]",
      context: appPath
    })
  ],
  resolve: {
    modules: [appPath, "node_modules"]
  }
};
