/* webpack.config.js */
const path = require("path");

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
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};