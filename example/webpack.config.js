const path = require('path');

module.exports = {
  entry: {
    app: ['./example/index.js']
  },
  devServer: {
    static: {
      directory: './example',
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                "useBuiltIns": "entry",
                "corejs": "3.22"
              }
            ],
            ["@babel/preset-react"]
          ],
          plugins: [
            ["@babel/plugin-proposal-function-bind"]
          ]
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  target: 'web'
};
