const path = require('path');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { 
        test: /\.less$/,
        use: [ 
            'style-loader',
            'css-loader', 
            'less-loader'
        ],
    },
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
}