const path = require("path");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.jpe?g$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: []
}