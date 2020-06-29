
module.exports = {
  configureWebpack: {
    // entry: './src/main.js',
    entry: './src/index.js',
    output: {
      filename: 'pagination.js',
      library: 'Pagination', // library 指定的是 require 时的模块名
      libraryTarget: 'umd', // libraryTarget 会生成不同 umd 的代码,可以只是 commonjs 标准的，也可以是指 amd 标准的，也可以只是通过 script 标签引入的
      umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    },
    optimization: {
      splitChunks: false
    }
  },
  productionSourceMap: false,
  css: {
    extract: false,
    sourceMap: false
  },
  filenameHashing: false
}
