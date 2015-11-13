var path = require('path');
var buildPath = path.resolve(__dirname, "app/assets/javascripts/react_views");
module.exports = {
  entry: './components/application.jsx',
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



