const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  //
  publicPath: process.env.NODE_ENV === 'production' ? '/go_home-project/' : '/',
  transpileDependencies: true,
});
