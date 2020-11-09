const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production", // by default it is in prod mode - compressed files
    // devtool: "none", // to avoid use of eval for better readability
    output: {
        filename: "[name].[contenthash].bundle.js", // Cache Busting with hash generated based on content
        // filename: "hello.js",
        path: path.resolve(__dirname, "dist")
        // path: path.resolve(__dirname, "CODEEEE"), // resolve path to code directory
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
});
