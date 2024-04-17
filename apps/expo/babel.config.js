module.exports = function (api) {
  api.cache(true);
  const plugins = [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
            'solito/image': 'solito/image/expo',
        },
      },
    ],
  ];

  return {
    presets: [ '@babel/plugin-syntax-flow',['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
    plugins,
  };
};
