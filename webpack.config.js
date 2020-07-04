const path = require("path");

var config = {
  entry: "./src/app/index.js",
  output: {
    path: path.resolve(__dirname, "dist/app"),
    filename: "bundle.js",
    publicPath: "/app/"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true
  }
};

module.exports = config;
