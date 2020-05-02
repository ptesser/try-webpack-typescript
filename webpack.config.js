const path = require('path');

module.exports = {
  // 'entry' can be also a simple string
  entry: {
    app: './src/index.js',
    profile: './src/profile.js',
  },
  mode: 'development',
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
  }
}
