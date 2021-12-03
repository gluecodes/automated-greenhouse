const {
  lstatSync,
  readdirSync
} = require('fs')

const pagesPath = `${__dirname}/../../src/frontend/pages`

module.exports = readdirSync(pagesPath).reduce((acc, pageDirName) => [
  ...acc,
  ...(lstatSync(`${pagesPath}/${pageDirName}`).isDirectory() ? [{
    ...(require(`${__dirname}/../../src/frontend/pages/${pageDirName}/settings.js`)),
    bundleName: pageDirName
  }] : [])
], [])
