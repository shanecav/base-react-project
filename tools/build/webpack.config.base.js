const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HappyPack = require("happypack");

const { appPath } = require("./paths");

module.exports = {
  output: {
    filename: "app.js",
    chunkFilename: "vendor.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [appPath],
        use: [
          {
            loader: "happypack/loader",
            options: { cacheDirectory: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: appPath,
      manifest: require("../../dll/vendor-manifest.json")
    }),
    new HappyPack({
      loaders: ["babel-loader"]
    }),
    new HtmlWebpackPlugin({
      title: "careuvo",
      template: path.resolve(appPath, "index.ejs")
    })
  ],
  resolve: {
    modules: ["node_modules"]
  }
};
