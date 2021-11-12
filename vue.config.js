const path = require("path");

module.exports = {
  publicPath: "/",
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
            prependData: "@import '@assets/scss/global.scss';",
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