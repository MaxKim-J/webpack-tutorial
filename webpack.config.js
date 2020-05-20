var path = require("path");
var webpack = require("webpack");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  let entryPath =
    env.mode === "production" ? "./public/index.js" : "./src/index.js";

  return {
    entry: "./src/index.js",
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      hot: true,
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [new webpack.ProgressPlugin(), new MiniCssExtractPlugin()],
  };
};
