"use strict"

const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

/* Performance testing purposes */
//const productionEnvironment = new webpack.DefinePlugin({
//  'process.env': {
//    'NODE_ENV': '"production"'
//  }
//})

const config = {
  //context: __dirname + "/src/",
  entry: [ "babel-polyfill", "./src/app.js" ],
  output: {
    path: __dirname + "/build",
    filename: "app.js",
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015"],
        }
      }
    ]
  },
  resolveLoader: {
    modulesDirectories: [path.join (__dirname, "node_modules")]
  },
  resolve: {
    alias: {
      // TODO Need to confirm this is no longer an issue with material-ui
      // FIXME This is a dirty, dirty hack to get around issue #2818 in material-ui, no known solution as of yet
      //'react': __dirname + "./node_modules/react",
      'common': __dirname + "/common",
      'app-config': __dirname + "/app.config.js"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { "API_HOST": `'${process.env.API_HOST}'`}
    }),
    new HTMLWebpackPlugin({
      hash: true,
      title: "Aleron",
      template: "src/index.ejs"
    })
  ]
}
module.exports = config
