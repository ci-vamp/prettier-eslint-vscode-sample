module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@features': './features',
            '@utils': './utils',
            '@assets': './assets',
            '@config': './config',
            '@components': './components',
            '@providers': './providers',
            '@hooks': './hooks',
            '@api': './api/index',
            '@navigation': './navigation/index',
            '@types': './types/index',
            '@screens': './screens/index',
          },
        },
      ],
    ],
  };
};
