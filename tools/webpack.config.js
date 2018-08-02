const { resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { isDevelopment } = require("./utils");

module.exports = {
  mode: isDevelopment() ? "development" : "production",

  context: resolve(process.cwd(), "app"),

  entry: [
    // Hot Module Reloading (HMR) is tricky to set up. To simplify things,
    // in development mode, we use HMR but only to reload the entire page.
    isDevelopment() ? "webpack-hot-middleware/client?reload=true" : null,
    isDevelopment() ? "./dev.js" : null,
    "./index.js"
  ].filter(Boolean),

  resolve: {
    extensions: [".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    isDevelopment() ? new webpack.HotModuleReplacementPlugin() : null
  ].filter(Boolean),

  devtool: isDevelopment() ? "cheap-module-eval-source-map" : "source-map"
};
