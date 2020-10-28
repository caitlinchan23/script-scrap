const path = require('path');

module.exports = {
  // setting entry point to client/index.js
  entry: './client/index.js',
  // setting output to bundle.js file in the build folder
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  // set mode
  mode: 'development',
  //add loader
  module: {
    rules: [
        {
        test: /\.jsx?/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  devServer: {
    publicPath: '/build',
    proxy: {
      '/api': 'http://localhost:3000'
    },
    contentBase: './client'
  }
};
