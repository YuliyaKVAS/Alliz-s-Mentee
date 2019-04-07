const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
    modules: [path.resolve(__dirname, './src/js'), 'node_modules'],
    alias: {
      img: path.resolve(__dirname, './src/img'),
      styles: path.resolve(__dirname, './src/styles/share')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, './src', 'js')],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: [path.resolve(__dirname, './src', 'js')],
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top'
            }
          },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html' 
    }),
    new ExtractTextPlugin({filename: 'style.less'})
  ]
};