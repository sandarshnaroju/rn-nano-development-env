const path = require('path');
const {version} = require('./package.json');
module.exports = {
  mode: 'production',

  // Path to the entry file, change it according to the path you have
  entry: path.join(__dirname, 'index.web.js'),

  // Path for the output files
  output: {
    path: path.join(__dirname, './web/dist'),
    filename: `${version}.bundle.js`,
  },

  // Enable source map support
  devtool: 'source-map',

  // Loaders and resolver config
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(@react-native-firebase)/,
        use: {
          loader: 'babel-loader',
          // Other babel-loader options...
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src', 'client')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [['import', {libraryName: 'antd', style: true}, 'antd']],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules[/\\](?!react-native-vector-icons)/,
        use: {
          loader: 'babel-loader',
          options: {
            // Disable reading babel configurationresource
            babelrc: false,
            configFile: false,

            // The configuration for compilation
            presets: [
              ['@babel/preset-env', {useBuiltIns: 'usage'}],
              '@babel/preset-react',
              '@babel/preset-flow',
              '@babel/preset-typescript',
              'module:metro-react-native-babel-preset',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
      },

      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/resource',
      },

      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/(?!(react-native-animatable)\/).*/,
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    alias: {
      'react-native$': require.resolve('react-native-web'),
    },
    extensions: ['.web.js', '.js'],
  },

  // Development server config
  devServer: {
    // contentBase: [path.join(__dirname, 'public')],
    static: {
      directory: path.join(__dirname, 'web'),
    },
    historyApiFallback: true,
  },
};
