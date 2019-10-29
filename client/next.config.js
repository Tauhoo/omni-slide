const withLess = require("@zeit/next-less")
const withCSS = require("@zeit/next-css")
const webpack = require("webpack")
module.exports = {
  exportTrailingSlash: true,
  ...withCSS(
    withLess({
      lessLoaderOptions: {
        modifyVars: {},
        javascriptEnabled: true,
      },
      webpack: config => {
        config.module.rules.push({
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                icon: true,
              },
            },
          ],
        })
        return config
      },
    })
  ),
  exportPathMap: () => {
    return {
      "/": { page: "/" },
    }
  },
}
