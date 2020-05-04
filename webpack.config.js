const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 'entry' can be also a simple string
  entry: {
    app: './src/index.ts',
    utils: './src/utils.ts',
    functors: './src/functors.ts',
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // inline style import
          'css-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          'awesome-typescript-loader', // 'ts-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({}),
  ],
}
