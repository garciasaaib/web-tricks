/* webpack.config.js */
const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
  mode: "development", //development o production
  entry: path.resolve(__dirname, "../src/hotmodule.js"),
  output: {
    path: path.resolve(__dirname, "../build"), //direccion de salida
    filename: "main.js"          //nombre de archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.css$/i, 
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    // new MiniCSSExtractPlugin({
    //   filename: "styles/main.css"
    // }),
    new HtmlWebpackPlugin({
      title: "wepack-hotmodule"
    }),
    new webpack.HotModuleReplacementPlugin({})
  ]
};