const path = require("path");
const bundlePath = path.resolve(__dirname, "dist/");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["env"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    publicPath: bundlePath,
    filename: "movies.js"
  },

  plugins: []
};