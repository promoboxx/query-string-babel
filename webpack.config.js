const path = require('path')

module.exports = (env = 'production') => {
  return {
    mode: env,
    entry: {
      index: path.resolve(__dirname, 'index.js'),
    },
    output: {
      filename: 'index.js',
      path: path.join(__dirname, `dist`),
    },
    module: { 
      rules: [{
        test: /\.(js)$/,
        use: 'babel-loader',
      }],
    }
  }
}