const path = require("path");

module.exports = {
    // devtool: "none", // to avoid use of eval for better readability
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    }, // multiple entry points to separate bundles for app code and vendor code
    module: {
        rules: [
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
