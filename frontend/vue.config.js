const path = require("path");
module.exports = {
  publicPath: '',

  transpileDependencies: [
    'vuetify'
  ],

  devServer: { 
    proxy: { 
      '/api': { 
        target: 'http://localhost:3000/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  //outputDir: '../backeknd/public',
  outputDir: path.resolve(__dirname, "../backeknd/public"),
  
  

  //assetsSubDirectory: 'static',
  //assetsPublicPath: '/',
  

  pluginOptions: {
    webpack: {
      dir: [
        './webpack'
      ]
    }
  }
}
