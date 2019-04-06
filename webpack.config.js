const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
      // {
      //   test: /\.less&/,
      //   use: [{
      //       loader: 'style-loader'
      //   }, {
      //       loader: 'css-loader'
      //   }, {
      //       loader: 'less-loader'
      //   }]
      // },
      {
        test: /\.less$/,
        loader: 'less-loader' // compiles Less to CSS
      }
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: '../'
      //       }
      //     },
      //     "css-loader"
      //   ]
      // }
    //   {
    //     test: /\.(css|less)$/,
    //     loader: ExtractTextPlugin.extract("css-loader", "less-loader")
    // }
    ]
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
         inject: false,
         hash: true,
         template: './src/index.html',
         filename: 'index.html' 
      }),
      new ExtractTextPlugin({filename: 'style.less'})
  ]
}