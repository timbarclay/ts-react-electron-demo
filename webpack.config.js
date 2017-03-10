const webpack = require('webpack');
const environment = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase().trim() : "development";
const production = environment === "production";
const ExtractPlugin = require("extract-text-webpack-plugin");
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(`Building for ${environment}`);

const plugins = [
  new CleanPlugin("dist"),
  new ExtractPlugin("bundle.css"),
  new webpack.DefinePlugin({
    __DEVELOPMENT__: !production,
    "process.env": {
      "NODE_ENV": JSON.stringify(environment)
    }
  }),
  new HtmlWebpackPlugin({
    chunks: ['renderer']
  })
];

if(production){
  plugins = plugins.concat([
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
  target: "electron-renderer",

  node: {
    __filename: false,
    __dirname: false
  },

  entry: {
    main: "./src/main/main.ts",
    renderer: "./src/renderer/renderer.tsx"
  },
  output: {
    path: "dist",
    filename: "[name]/bundle.js",
  },

  devtool: production ? false : "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" 
      },
      { 
        test: /\.scss/,
        use: ExtractPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', 
            'sass-loader'
          ]
        }) 
      },
      { 
        test: /\.html/,
        loader: "html" 
      },
      { 
        test: /\.(png|gif|jpe?g|svg)$/i,
        loader: "url?limit=10000"
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader?limit=10000'
      },
      { 
        test: /\.js$/, 
        enforce: "pre",
        loader: "source-map-loader" 
      }
    ]
  },

  plugins: plugins
};