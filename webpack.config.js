const path = require("path");

module.exports = {
  // mode
  mode: "development", // production
  // entry
  entry: path.resolve(__dirname, "./src/app.js"),
  // output
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  // plugins
  // loaders
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Create `style` node from JS strings
          "style-loader",
          // Translate CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
