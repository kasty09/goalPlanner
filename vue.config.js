const path = require('path')

function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}



module.exports = {
  devServer: {
    port: 9001
  },
  configureWebpack: config => {
    Object.assign(config.resolve.alias, {
      '@goals': resolve('src/components/goals'),
      '@requests': resolve('src/requests')
    })
  }
}
