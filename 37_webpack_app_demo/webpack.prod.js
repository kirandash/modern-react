const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extract CSS into files
                    'css-loader', // 2. converts css into common js
                    'sass-loader' // 1. Truns sass into css
                ], // Note: Order is executed in reverse. 
                // css-loader should execute first and then style-loader
            },
        ]
    }
});
