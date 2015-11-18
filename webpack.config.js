var path = require('path');
var buildPath = path.resolve(__dirname, "app/assets/javascripts/components");
var manifestPath = path.resolve(__dirname, "app/components");
var manifest = require(manifestPath + '/manifest.js');

module.exports = {
  entry: manifest,
  devtool: 'source-map',
  output: {
    path: buildPath,
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};



