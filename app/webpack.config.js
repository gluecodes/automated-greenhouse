const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputDirectory = 'dist'

module.exports = {
  entry: ['babel-polyfill', './src/interface/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: { limit: 100000 }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    host: '0.0.0.0',
    port: 4000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api':  'http://localhost:8080',
      '/ws': 'ws://localhost:8080'
      // '/api': 'http://ag_api:7070',
      // '/ws': 'ws://ag_api:7070'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    })
  ]
}
