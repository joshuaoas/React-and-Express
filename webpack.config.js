//3 steps take in some files, do something with them, output them
const { resolve } = require('path');
const webpack = require('webpack');

//entire config lives in this
module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.jsx',
  ],
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'public', 'javascripts'),
    publicPath: '/javascripts',
  },
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, ''),
    publicPath: '/javascripts',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    //rules objects, can have more than one, look for jsx files, ignore node_modules and if you find a jsx file, run babel on it
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};

//helper functions could live here