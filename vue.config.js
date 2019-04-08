module.exports = {
  devServer: {
    port: 3000,
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/variables.scss";',
      },
    },
  },
};
