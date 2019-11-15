module.exports = (api, options) => {
  const axios = require('./tools/axios')
  // 安装一些基础公共库
  api.extendPackage({
    dependencies: {
      axios: '^0.19.0',
      moment: '^2.24.0',
      'normalize.css': '^8.0.1',
      'js-cookie': '^2.2.1'
    },
    devDependencies: {
      'css-loader': '^3.2.0',
      'style-loader': '^1.0.0'
    }
  })

  // 渲染axios相关文件
  axios.renderFiles(api)
}
