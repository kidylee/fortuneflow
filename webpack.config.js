var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs');


//do not pack the module which has binary file
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


module.exports = {
    entry: "./src/app.js",
    target: "node-webkit",
    output: {
        path: "dist",
        filename: "app.js",
        publicPath: "http://localhost:8080/"

    },

    module: {
        loaders: [
            // { test: /\.css$/, loader: "style!css" }
        ],
        include:  [
            // path.resolve(__dirname, "src")
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    
  ],

  externals: nodeModules

};

