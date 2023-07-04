const path = require("path");

module.exports = {
  entry: {
    "options": ["./src/ui/prodRulesController.js", "./src/ui/prodRulesView.js"],
    "content-scripts": ["./src/content-scripts/productivity.ts"]
  },
  module: {
    rules: [
      {
        test: "/\.tsx?$/",
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/[name]"),
  },
  mode: "development"
};
