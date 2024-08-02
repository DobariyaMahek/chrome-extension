const path = require("path");

module.exports = function override(config, env) {
  // Adjust output filename for the popup script
  config.output = {
    ...config.output,
    filename: "popup.js",
    path: path.resolve(__dirname, "build"),
  };

  return config;
};
