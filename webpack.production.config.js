"use strict"

const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
//const CopyWebpackPlugin = require("copy-webpack-plugin")
// Before packaging react-layout just reference directly

module.exports = {
  //context: __dirname + "/src/",
  entry: ["babel-polyfill", "./src/app.js" ]
  ,output: {
    path: "./build/production/"
    ,filename: "app.js"
    ,publicPath: ""
  }
  ,module: {
    loaders: [
      {
        test: /\.(js|jsx)$/
        ,loader: "babel"
        ,exclude: /node_modules/
        ,query:{
          presets: ["react", "es2015"]
        }
      }
    ]
  }
  ,resolveLoader: {
    modulesDirectories: [ path.join(__dirname, "node_modules") ]
  }
  ,resolve: {
    alias: {
      //'react': __dirname + "/node_modules/react",
      'common': __dirname + "/common",
      'app-config': __dirname + "/app.production.config.js"
    }
  }
  ,plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
    ,new HTMLWebpackPlugin({
      hash: true,
      title: "Aleron",
      template: "src/index.ejs"
    })
    ,new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ,new webpack.optimize.UglifyJsPlugin()
    ,new webpack.optimize.DedupePlugin()
  ]
}
