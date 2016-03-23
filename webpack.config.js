var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs');
const webpack = require('webpack');


//do not pack the module which has binary file
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


//Package UI modules
delete nodeModules['react'];
delete nodeModules['react-dom'];
delete nodeModules['react-redux'];
delete nodeModules['redux'];
delete nodeModules['bootstrap'];
delete nodeModules['jquery'];
delete nodeModules['react-grid-layout'];
// delete nodeModules['compass-mixins'];




// delete nodeModules['font-awesome'];





module.exports = {
  debug: true,
    entry: [
      'font-awesome-loader!./node_modules/font-awesome-loader/font-awesome.config.js',
      // 'bootstrap-loader',
      './src/index.jsx'
    ],
    target: "node-webkit",
    output: {
        path: "dist",
        filename: "app.js",
        publicPath: "http://localhost:8080/"

    },

    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              loader: 'babel-loader',
              include: [
                path.resolve(__dirname, "src"),
                path.resolve(__dirname, "test")
              ],
            },
            { test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },
            { test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ] },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {
                test: /\.jpg$/,
                loader: "url-loader",
                query: { mimetype: "image/jpeg" }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            // $: "jquery",
//             jQuery: "jquery",
//             "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({
          title: 'Fortune Flow',
          template: 'src/index.ejs',
          inject:'body'
        })

  ],

  externals: nodeModules

};

