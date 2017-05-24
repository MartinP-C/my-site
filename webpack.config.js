const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    `${__dirname}/src/index.js`
  ],
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?importLoaders=1'],
        exclude: ['node_modules']
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?prefix=font/&limit=5000"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.gif/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.jpg/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.png/,
        exclude: /(node_modules|bower_components)/,
        loader: "url-loader?limit=10000&mimetype=image/png"
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      }
    ],
  },

  plugins: process.argv.indexOf('-p') === -1 ? [
    
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ] : [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};
