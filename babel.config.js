module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        path: '.env',
        moduleName: '@env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
