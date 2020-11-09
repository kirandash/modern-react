const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development", // by default it is in prod mode - compressed files
    // devtool: "none", // to avoid use of eval for better readability
    output: {
        filename: "[name].bundle.js", // Cache Busting with hash generated based on content
        // filename: "hello.js",
        path: path.resolve(__dirname, "dist")
        // path: path.resolve(__dirname, "CODEEEE"), // resolve path to code directory
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
            removeComments: true
        }
    })],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader', // 3. Inject styles into DOM
                    'css-loader', // 2. converts css into common js
                    'sass-loader' // 1. Truns sass into css
                ], // Note: Order is executed in reverse. 
                // css-loader should execute first and then style-loader
            },
        ]
    }
});
