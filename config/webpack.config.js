const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    options: ['./src/ui/prodRulesController.ts'],
    content_scripts: ['./src/content-scripts/productivity.ts'],
    popup: ['./src/popup/popup.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './prod-extension/js'),
    library: ['MyLibrary', '[name]'],
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'config/tsconfig.json'
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },

  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './prod-extension/js'
  },
  optimization: {
    runtimeChunk: 'single'
  }
};
