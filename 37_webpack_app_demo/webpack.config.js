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
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // Note: Order is executed in reverse. 
                // css-loader should execute first and then style-loader
            },
        ],
    },
}
