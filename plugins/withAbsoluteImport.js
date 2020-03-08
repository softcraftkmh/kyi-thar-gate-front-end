const path = require("path");

module.exports = (nextConfig = {}) =>
  Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.resolve.alias["components"] = path.join(
        __dirname,
        "../components"
      );
      config.resolve.alias["utils"] = path.join(__dirname, "../utils");
      config.resolve.alias["store"] = path.join(__dirname, "../store");
      return config;
    }
  });
