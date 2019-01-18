const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'www')
  }
};
