const path = require("path");

module.exports = {
    mode: "development", // by default it is in prod mode - compressed files
    // devtool: "none", // to avoid use of eval for better readability
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        // filename: "hello.js",
        path: path.resolve(__dirname, "dist")
        // path: path.resolve(__dirname, "CODEEEE"), // resolve path to code directory
    },
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
        ],
    },
}
