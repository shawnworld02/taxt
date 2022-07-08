const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devDist",
  lintOnSave: true,
  /**
   * webpack配置
   */
  chainWebpack: (config) => {},
  configureWebpack: (config) => {
    config.resolve = {
      extensions: [".js", ".json", ".vue"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
        public: path.resolve(__dirname, "./public"),
        components: path.resolve(__dirname, "./src/components"),
        common: path.resolve(__dirname, "./src/common"),
        api: path.resolve(__dirname, "./src/api"),
        views: path.resolve(__dirname, "./src/views"),
        data: path.resolve(__dirname, "./src/data"),
      },
    };
  },
  productionSourceMap: false,
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/styles/main.scss";`,
      },
    },
  },
});
