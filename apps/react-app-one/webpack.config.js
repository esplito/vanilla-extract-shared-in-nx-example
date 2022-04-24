const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = (config, context) => {
  return {
    ...config,
    plugins: [...config.plugins, new VanillaExtractPlugin()],
  };
};
