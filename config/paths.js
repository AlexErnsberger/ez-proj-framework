const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => {
  return path.resolve(appDirectory, relativePath)
}

module.exports = {
  appHtml: resolveApp('src/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appBuild: resolveApp('dist'),
  appSrc: resolveApp('src'),
  // appFavicon: resolveApp('favicon.ico'),
  appPostCssConfig: resolveApp('postcss.config.js'),
}
