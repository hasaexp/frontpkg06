const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    /////////////////////////////
    // ビルド時にurl関数の値をリライト //
    /////////////////////////////
    publicPath: 'http://www.example.com/',
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            // drop_consoleプロパティにtureを指定しているが、
            // consoleオブジェクトが破棄されない
            drop_console: true
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({}),
    ]
  }
});
