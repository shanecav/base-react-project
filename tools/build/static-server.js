const express = require('express')
const app = express()
const historyMiddleware = require('connect-history-api-fallback')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')

const webpack = require('webpack')
const config = require('./webpack.config.dev')
const compiler = webpack(config)
const { devPath } = require('./paths')

app.use(historyMiddleware())
app.use(hotMiddleware(compiler))
app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}))
// Static must be last so files in dist don't supercede webpack's in-memory assets
app.use(express.static(devPath))

app.listen(8080)
