const path = require('path')

module.exports = {
  mode: 'development',
  entry: './dist/src/nettango.js',
  output: {
    filename: 'nettango.js',
    path: path.resolve(__dirname)
  }
}
