const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  // devServer: {
  // proxy: {
  //   host: '127.0.0.1',
  //   port: 8080,
  //   client: {
  //     WebSocketURL: 'ws://192.168.2.126:8080/ws'
  //   },
  //   Headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // }
  // }
})
