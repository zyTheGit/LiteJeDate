const path = require('path');
module.exports = {
  mode: "production",//production,development
  entry: {
	  LiteJeDate:'./src/js/index'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      root: "jeDate",
      amd: "jeDate",
      commonjs: "jeDate"
    },
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          // modules: true
        }
      }
      ]
    }]
  }
};