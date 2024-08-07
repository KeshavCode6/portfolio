const path = require('path')

module.exports = {
  mode:"development",
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
    navbar: path.resolve(__dirname, './src/navbar.js'),
    achievements: path.resolve(__dirname, './src/achievements.js')
  },
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: '[name].js'
  }
}