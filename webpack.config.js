const path = require('path')

module.exports = {
  mode:"development",
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: '[name].js'
  }
}