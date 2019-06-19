const webpack = require("webpack")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const base = require("./webpack.base")

module.exports = merge(base, {
  mode: "development",

  // output: {
  //   filename: '[name].js',
  //   chunkFilename: '[name].chunk.js',
  // },

  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },

  devServer: {
    hot: true,
    compress: true,
    open: true,
    port: 3000,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  // devtool: 'eval-source-map',

  // performance: {
  //   hints: false,
  // },
})
