const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // Entrypoint
  /////////////////////////////
  // エントリーポイントがひとつの場合 //
  /////////////////////////////
  entry: './src/js/index.js',

  ///////////////////////////////////
  // 複数のエントリーポイントを設定する場合 //
  ///////////////////////////////////
  // entry: {
  //   index: './src/js/index.js',
  //   sub: './src/js/sub.js'
  // },
  // End Entrypoint

  // output
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
    // filename: '[name]-[chunkhash].js'
  },
  // End output

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: false,
              failOnError: true
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', ':data-src']
          }
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.css$/,
        ///////////////////////
        // 別ファイルとして書き出し //
        ///////////////////////
        // use: ExtractTextPlugin.extract({ use: 'css-loader'} )

        ///////////////////////////////////////
        // JSファイルにバンドル                    //
        // Webフォントの設定のために.cssファイルを使用 //
        ///////////////////////////////////////
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 2,
            }
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
            }
          }
        ])
      },
      {
        test: /.(gif|png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200,
              name: './images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/style.css'),

    // ファイルを追加する時はHtmlWebpackPluginインスタンスを追加
    new HtmlWebpackPlugin({
      title: 'title',
      filename: 'index.html',
      template: 'src/index.pug',
    }),
    new CleanWebpackPlugin(['dist']),
    new VueLoaderPlugin(),
  ],
  resolve: {
    // Webpackで利用するときの設定
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  }
}
