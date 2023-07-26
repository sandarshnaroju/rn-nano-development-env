module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-react'],
  plugins: ['@babel/plugin-transform-modules-commonjs'],
  env: {
    production: {
      plugins: [
        'react-native-paper/babel',
        '@babel/plugin-syntax-jsx ',
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
  },
};
// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };
