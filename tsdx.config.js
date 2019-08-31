const regenerator = require('rollup-plugin-regenerator');

module.exports = {
  rollup(config, options) {
    config.plugins.push(regenerator());
    return config;
  },
};
