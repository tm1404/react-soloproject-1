const config = require("./webpack.config.js");
const { merge } = require("webpack-merge");

const build = merge(config, {
  mode: "production",
});

module.exports = build;
