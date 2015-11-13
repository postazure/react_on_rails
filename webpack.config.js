var path = require('path');
var buildPath = path.resolve(__dirname, "frontend/dist");
module.exports = {
  entry: './frontend/components/application.jsx',
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



