const vm = require('vm')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const CopyPlugin = require('copy-webpack-plugin')
const version = require('../buildStamp')
const configs = require('./configs/index')

const prerenderSandbox = {
  global,
  h: () => {},
  require
}

vm.createContext(prerenderSandbox)

const runPrerender = (code, ...args) => {
  vm.runInContext(code, prerenderSandbox)

  const prerenderResult = prerenderSandbox.default(...args)

  return prerenderResult.t || prerenderResult
}

const pages = configs.pageSettings.map(page => ({
  ...page,
  prerenderedPage: fs.existsSync(`${__dirname}/../dist/bundles/${page.bundleName}-prerender.js`)
    ? runPrerender(fs.readFileSync(`${__dirname}/../dist/bundles/${page.bundleName}-prerender.js`))
    : '<div id="layout"><div gc-as="layout"></div></div>'
}))

const mediaFiles = fs.existsSync('/../dist/bundles/mediaFiles.js')
  ? require(`${__dirname}/../dist/bundles/mediaFiles`)
  : {}

const targetPage = process.argv[(process.argv.findIndex(arg => (arg === '--page')) + 1) || -1]

console.log('\n\nBundling app...\n\n')

module.exports = {
  target: 'web',
  entry: pages
    .filter(({ bundleName }) => (!targetPage || bundleName === targetPage))
    .reduce((acc, { bundleName }) => ({
      ...acc,
      [bundleName]: `${__dirname}/../src/frontend/pages/${bundleName}/index.js`
    }), {}),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../node_modules/@gluecodes-components')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, '../babel.config.js')
          }
        }
      },
      configs.cssRules,
      ...configs.mediaFileRules
    ]
  },
  plugins: [
    configs.miniCssExtractPlugin,
    ...pages
      .filter(({ bundleName }) => (!targetPage || bundleName === targetPage))
      .map(page => (
        new HtmlWebpackPlugin({
          chunks: [],
          filename: `${__dirname}/../dist/${page.bundleName}.html`,
          inject: false,
          template: path.resolve(__dirname, `../src/pageTemplates/${page.template || 'index'}/index.ejs`),
          templateParameters: {
            ...page,
            env: process.env.NODE_ENV,
            cssBundleFile: `/bundles/${page.bundleName}-${version}.bundle.css`,
            jsBundleFile: `/bundles/${page.bundleName}-${version}.bundle.js`,
            jsStylesChunkFile: `/bundles/styles-${version}.chunk.js`,
            mediaFiles
          }
        })
      )),
    ...(process.env.NODE_ENV === 'production' ? [
      new ImageminPlugin({
        pngquant: {
          quality: '95-100'
        }
      })
    ] : []),
    new webpack.DefinePlugin({
      'global.ENV': JSON.stringify(process.env.NODE_ENV),
      'global.LOCATION_ORIGIN': JSON.stringify(process.env.LOCATION_ORIGIN),
      'global.GOOGLE_RECAPTCHA_SITE_KEY': JSON.stringify(process.env.GOOGLE_RECAPTCHA_SITE_KEY)
    }),
    // new CopyPlugin([
    //   { from: path.resolve(__dirname, '../src/frontend/mediaFiles/images'), to: path.resolve(__dirname, '../src/dist/images') }
    // ])
  ],
  output: {
    filename: `[name]-${version}.bundle.js`,
    chunkFilename: `[name]-${version}.chunk.js`,
    path: path.resolve(__dirname, '../dist/bundles/'),
    publicPath: '/bundles/',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devServer: {
    host: '0.0.0.0',
    port: 3030,
    publicPath: '/bundles/',
    contentBase: path.resolve(__dirname, '../src/dist'),
    inline: true,
    hot: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  ...(process.env.NODE_ENV === 'production' ? {
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true
          },
          defaultVendors: {
            test: (module) => {
              const moduleName = module.nameForCondition
                ? module.nameForCondition()
                : ''

              return /[\\/]node_modules[\\/]/i.test(moduleName) && /\.(js|jsx|mjs)$/i.test(moduleName)
            },
            priority: -10,
            reuseExistingChunk: true
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }
  } : {})
}
