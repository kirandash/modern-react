const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development", // by default it is in prod mode - compressed files
    // devtool: "none", // to avoid use of eval for better readability
    output: {
        filename: "main.js", // Cache Busting with hash generated based on content
        // filename: "hello.js",
        path: path.resolve(__dirname, "dist")
        // path: path.resolve(__dirname, "CODEEEE"), // resolve path to code directory
    },
});
