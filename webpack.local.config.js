"use strict"

const path = require("path")
const webpack = require("webpack")
//const CopyWebpackPlugin = require("copy-webpack-plugin")
// Before packaging react-layout just reference directly

module.exports = {
  context: __dirname + "/src/"
  ,entry: [ "./app.js" ]
  ,output: {
    path: "./build/development/"
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
      'react': __dirname + "/node_modules/react",
      'common': __dirname + "/common",
      'app-config': __dirname + "/app.local.config.js"
    }
  }
  ,plugins: [
    new webpack.DefinePlugin({
    })
  ]
}
