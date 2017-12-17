const webpack = require('webpack');
const coreJs = require('core-js');
const path = require('path');
const outputPath = path.resolve(__dirname, './dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  "entry": {
    "app": [
      'core-js',
      path.resolve(__dirname, './src/index.tsx')
    ]
  },
  "output": {
    "path": outputPath,
    "filename": '[name].js',
  },
  "devtool": 'source-map',
  "resolve": {
    "extensions": ['.ts', '.tsx', '.js', '.json', '.png'],
    "alias": {
      "@src": path.resolve(__dirname, './src')
    }
  },
  "module": {
    "rules": [
      {
        "test": /\.tsx?$/,
        "exclude": /node_modules/,
        "use": 'awesome-typescript-loader'
      },
      {
        "enforce": 'pre',
        "test": /\.js$/,
        "use": 'source-map-loader'
      },
      {
        "test": /\.png$/,
        "exclude": /(node_modules)/,
        "use": {
          "loader": 'url-loader',
          "options": {
            "limit": 10000,
            "mimetype": 'image/png',
            "name": '/images/[name].[ext]'
          }
        }
      },
      {
         "test": /\.(eot|svg|ttf|woff|woff2)$/,
          "use": {
            "loader": 'file-loader',
            "options": {
              "name": '/fonts/[name].[ext]',
            }
          }
      }
    ]
  },
  "plugins": [
    new HtmlWebpackPlugin({
      "template": path.join(__dirname, './src/index.html'),
      "filename": 'index.html',
      "path": outputPath
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  "devServer": {
    "contentBase": path.resolve(__dirname, './dist'),
    "port": 8081,
    "historyApiFallback": true,
    "inline": true,
    "hot": true,
    "host": '127.0.0.1'
  }
};

module.exports = webpackConfig;