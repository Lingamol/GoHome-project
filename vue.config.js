const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  // publicPath: '/go_home-project/',
  publicPath: process.env.NODE_ENV === 'production' ? '/go_home-project/' : '/',
  transpileDependencies: true,
});
