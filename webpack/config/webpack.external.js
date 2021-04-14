/* webpack.config.js */
const path = require("path");

module.exports = {
  mode: "development", //development o production
  entry: path.resolve(__dirname, "../src/index.js"), //archivo de entrada
  output: {
    path: path.resolve(__dirname, "../build"), //direccion de salida
    filename: "main.js"          //nombre de archivo de salida
  }
};