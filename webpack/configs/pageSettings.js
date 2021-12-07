const {
  lstatSync,
  readdirSync
} = require('fs')

const pagesPath = `${__dirname}/../../frontend/pages`

module.exports = readdirSync(pagesPath).reduce((acc, pageDirName) => [
  ...acc,
  ...(lstatSync(`${pagesPath}/${pageDirName}`).isDirectory() ? [{
    ...(require(`${__dirname}/../../frontend/pages/${pageDirName}/settings.js`)),
    bundleName: pageDirName
  }] : [])
], [])
