const path = require('path')

module.exports = {
  mode: 'development',
  entry: './dist/src/ntango-shim.js',
  output: {
    filename: 'ntango.js',
    path: path.resolve(__dirname)
  }
}
