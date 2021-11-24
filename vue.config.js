const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/guides/' : '/',
  devServer: {
    disableHostCheck: true,
    port: 8080,
    public: "0.0.0.0:8080",
  },
  chainWebpack: (config) => {
    ["vue-modules", "vue", "normal-modules", "normal"].forEach((match) => {
      config.module
        .rule("scss")
        .oneOf(match)
        .use("sass-loader")
        .tap((options) =>
          Object.assign(options, {
            additionalData: "@import '@assets/scss/global.scss';",
          })
        );
    });
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@pages": path.resolve(__dirname, "src/assets/pages/"),
        "@components": path.resolve(__dirname, "src/components/"),
        "@assets": path.resolve(__dirname, "src/assets/"),
        "@config": path.resolve(__dirname, "src/config/"),
        "@services": path.resolve(__dirname, "src/services/"),
      },
    },
    module: {
      rules: [
        {
          test: /\.md/,
          use: 'raw-loader',
        }
      ],
    },
  },
};