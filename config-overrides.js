const path = require('path');
const { override, getBabelLoader } = require('customize-cra');

const removeConfig = (config) => {
  const loader = getBabelLoader(config);

  loader.options.presets = [];
  loader.options.plugins = [];

  return config;
};

const enableBabelConfig = (config) => {
  const loader = getBabelLoader(config);
  loader.options.configFile = path.resolve(__dirname, 'babel.config.js');

  return config;
};

module.exports = override(removeConfig, enableBabelConfig);
