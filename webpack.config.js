const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 'entry' can be also a simple string
  entry: {
    app: './src/index.js',
    profile: './src/profile.js',
  },
  mode: 'development', // allow to have more informations about run time error
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '/dist',
  },
  output: {
    filename: '[name].bundle.js', // [name] take dynamically name used before `.bundle.js` => `app.bundle.js` and so on
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // inline style import
          'css-loader',
        ],
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({}),
  ],
}
