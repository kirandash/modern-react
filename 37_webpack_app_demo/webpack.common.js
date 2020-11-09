const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // devtool: "none", // to avoid use of eval for better readability
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    }, // multiple entry points to separate bundles for app code and vendor code
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
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
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[hash].[ext]',
                          outputPath: 'imgs',
                          publicPath: 'imgs',
                        }
                    },
                ],
            }
        ],
    },
}
