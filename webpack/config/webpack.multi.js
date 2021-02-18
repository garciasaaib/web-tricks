/* webpack.config.js */
const path = require("path");

module.exports = {
  mode: "development", //development o production
  entry: {
    home: path.resolve(__dirname, "../src/index.js"),
    prices: path.resolve(__dirname, "../src/multi/prices.js"),
    contact: path.resolve(__dirname, "../src/multi/contact.js"),
  },
  output: {
    path: path.resolve(__dirname, "../build/multi"), //direccion de salida
    filename: "[name].js"          //nombre de archivo de salida
  }
};