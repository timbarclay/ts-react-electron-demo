var webpack = require('webpack');
const production = process.env.NODE_ENV === "production";
const ExtractPlugin = require("extract-text-webpack-plugin");
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var plugins = [
  new CleanPlugin("dist"),
  new ExtractPlugin("bundle.css"),
  new webpack.DefinePlugin({
    __DEVELOPMENT__: !production,
    "process.env": {
      "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new webpack.ProvidePlugin({
    fetch: "imports?this=>global!exports?global.fetch!isomorphic-fetch"
  }),
  new HtmlWebpackPlugin({
    chunks: ['renderer']
  })
];

console.log("Building for " + process.env.NODE_ENV);

if(production){
  plugins = plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 51200
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: true
    })
  ]);
}

module.exports = {
  target: 'electron-renderer',

  node: {
    __filename: false,
    __dirname: false
  },

  entry: {
    main: "./src/main/main.ts",
    renderer: "./src/renderer/renderer.ts"
  },
  output: {
    path: "dist",
    filename: "[name]/bundle.js",
  },

  debug: !production,
  devtool: production ? false : "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { 
        test: /\.scss/,
        loader: ExtractPlugin.extract("style", "css!sass") 
      },
      { test: /\.html/, loader: "html" },
      { 
        test: /\.(png|gif|jpe?g|svg)$/i,
        loader: "url?limit=10000"
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader?limit=10000'
      }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins: plugins
};