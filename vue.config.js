module.exports = {
  productionSourceMap: false,
  css: {
    extract: false,
    sourceMap: false
  },
  filenameHashing: false,
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  }
}
