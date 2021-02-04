const path = require('path')

module.exports = {
  mode: 'development',
  entry: './dist/src/nettango.js',
  output: {
    filename: 'ntango.js',
    path: path.resolve(__dirname)
  }
}
