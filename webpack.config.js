//var path = require('path');
//var webpack = require('webpack');

module.exports = {
  entry: './www/js/index.jsx',
  output: { path: __dirname,  filename: 'bundle.js' },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

