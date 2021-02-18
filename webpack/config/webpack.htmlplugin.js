/* webpack.config.js */
const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development", //development o production
  entry: path.resolve(__dirname, "../src/cssloader.js"),
  output: {
    path: path.resolve(__dirname, "../build"), //direccion de salida
    filename: "main.js"          //nombre de archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.css$/i, 
        use: [MiniCSSExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "styles/main.css"
    }),
    new HtmlWebpackPlugin({
      title: "plugins"
    })
  ]
};