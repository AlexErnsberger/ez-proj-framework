const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => {
  return path.resolve(appDirectory, relativePath)
}

module.exports = {
  // appIndexJs: resolveApp('src/common/index.js'),
  appHtml: resolveApp('src/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appBuild: resolveApp('dist'),
  appDll: resolveApp('dist/statics/dll'),
  appSrc: resolveApp('src'),
  appPostCssConfig: resolveApp('postcss.config.js'),
  appModules: resolveApp('node_modules'),
}
