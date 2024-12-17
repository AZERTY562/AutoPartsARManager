const { withExpo } = require('@expo/next-adapter');
const withTM = require('next-transpile-modules')(['react-native', 'react-native-web']);

module.exports = withExpo(withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    return config;
  },
}));

