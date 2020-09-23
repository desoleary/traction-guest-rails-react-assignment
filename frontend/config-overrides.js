const path = require('path');
const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');

const configFactory = require('react-scripts/config/webpack.config');
const jestConfig = require('./jest.config');

const paths = {
  src: path.resolve(__dirname, './src'),
  build: path.resolve(__dirname, './build'),
  static: path.resolve(__dirname, './public'),
};

const configWithWixStyableProcessing = (config) => {
  const ruleIndexWithOneOfKey = config.module.rules
    .map((rule, index) => ({
      rule,
      index,
    }))
    .find(({ rule, index }) => rule.hasOwnProperty('oneOf')).index;

  // ignoring stylable files as the the original webpack config does not know how to process these files.
  config.module.rules[ruleIndexWithOneOfKey].exclude = /\.st.css$/;

  // @stylable/webpack-plugin compiles .st.css files
  config.plugins.push(new StylableWebpackPlugin());

  return config;
};

module.exports = {
  webpack: function (_, env) {
    const config = configFactory(env);
    return configWithWixStyableProcessing(config);
  },
  jest: function () {
    return jestConfig;
  },
};
