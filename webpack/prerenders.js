const path = require('path')
const webpack = require('webpack')
const configs = require('./configs/index')

const targetPage = process.argv[(process.argv.findIndex(arg => (arg === '--page')) + 1) || -1]

console.log('\n\nBundling prerenders...\n\n')

module.exports = {
  target: 'node',
  entry: configs.pageSettings
    .filter(({ bundleName }) => (!targetPage || bundleName === targetPage))
    .reduce((acc, { bundleName }) => ({
      ...acc,
      [bundleName]: `${__dirname}/../src/pages/${bundleName}/prerender.js`
    }), {}),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../node_modules/@gluecodes-components')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: false,
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env', {
                    targets: {
                      browsers: [
                        'last 2 versions',
                        'edge >= 16'
                      ]
                    },
                    shippedProposals: true
                  }
                ]
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                [
                  'babel-plugin-jsx-dom-expressions',
                  {
                    moduleName: 'solid-js/web',
                    builtIns: [
                      'For',
                      'Show',
                      'Switch',
                      'Match',
                      'Suspense',
                      'SuspenseList',
                      'Portal',
                      'Index',
                      'Dynamic',
                      'ErrorBoundary'
                    ],
                    contextToCustomElements: true,
                    wrapConditionals: true,
                    generate: 'ssr'
                  }
                ],
                '@babel/plugin-proposal-export-namespace-from'
              ]
            }
          }
        ]
      },
      configs.cssRules,
      ...configs.mediaFileRules
    ]
  },
  plugins: [
    configs.miniCssExtractPlugin,
    new webpack.DefinePlugin({
      'global.ENV': JSON.stringify(process.env.ENV),
      'global.LOCATION_ORIGIN': JSON.stringify(process.env.LOCATION_ORIGIN),
      'global.GOOGLE_RECAPTCHA_SITE_KEY': JSON.stringify(process.env.GOOGLE_RECAPTCHA_SITE_KEY)
    })
  ],
  output: {
    filename: '[name]-prerender.js',
    chunkFilename: '[id]-prerender.chunk.js',
    path: path.resolve(__dirname, '../dist/bundles'),
    publicPath: '/bundles/',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  externals: {
    'solid-js/h': 'root h'
  },
  resolve: {
    alias: {
      'solid-js/web$': 'solid-js/web/dist/server.js'
    }
  }
}
