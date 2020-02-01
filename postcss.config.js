module.exports = () => {
  return {
    plugins: {
      // 移动端单位转换
      'postcss-px-to-viewport': {
        viewportWidth: 375,
        unitPrecision: 6,
        // selectorBlackList: ['app'],
        // unitToConvert: 'px',
        // viewportUnit: 'vw',
        // minPixelValue: 1,
        // mediaQuery: false,
      },
      autoprefixer: {},
      'postcss-flexbugs-fixes': {},
    },
  }
}
