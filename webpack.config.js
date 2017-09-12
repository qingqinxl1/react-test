var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [ //{
      //   test: /\.js?$/,
      //   loaders: ['babel'],
      //   exclude: /node_modules/
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      } //,
      // { test: /\.css$/, loader: "style!css" },
      // {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}
