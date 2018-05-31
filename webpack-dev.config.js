const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ["env"],
                    plugins: ["transform-class-properties"]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        publicPath: bundlePath,
        filename: "movies.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 8080,
        publicPath: "http://localhost:8080/dist"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};