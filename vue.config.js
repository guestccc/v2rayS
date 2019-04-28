module.exports = {
  devServer: {
    port: 3001,
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/variables.scss";',
      },
    },
  },
};
