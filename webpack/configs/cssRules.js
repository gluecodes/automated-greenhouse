const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const getLoaders = (cssLoader, shouldAllowCssModules = false) => [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '/bundles/',
      ...(shouldAllowCssModules ? {
        esModule: false,
        // modules: {
        //   namedExport: false
        // }
      } : {})
    }
  },
  cssLoader,
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        config: path.resolve(__dirname, '../../postcss.config.js')
      },
      sourceMap: process.env.NODE_ENV !== 'production'
    }
  }
]

module.exports = {
  test: /\.css$/,
  exclude: path.resolve(__dirname, '../../dist'),
  oneOf: [
    {
      resourceQuery: /external/,
      use: getLoaders({
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: false,
          sourceMap: false
        }
      }, false)
    },
    {
      use: getLoaders({
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          esModule: false,
          modules: {
            exportLocalsConvention: 'asIs',
            localIdentName: '[local]--[hash:base64:5]',
            namedExport: false
          },
          sourceMap: process.env.NODE_ENV !== 'production'
        }
      }, true)
    }
  ]
}
