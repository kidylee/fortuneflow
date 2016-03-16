var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs');
var _ = require('lodash')






//do not pack the module which has binary file
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });



_.without(nodeModules,'react','react-dom');

console.log(nodeModules);


module.exports = {
    entry: "./src/app.jsx",
    target: "node-webkit",
    output: {
        path: "dist",
        filename: "app.js",
        publicPath: "http://localhost:8080/"

    },

    module: {
        loaders: [
            {
              test: /\.jsx$/,
              loader: 'babel-loader',
              include: [
                path.resolve(__dirname, "src"),
                path.resolve(__dirname, "test")
              ],
            }
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

