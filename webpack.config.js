const path = require("path")
module.exports = {
  // webpack will watch for all the files in the folder whick pointed in context
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
}
