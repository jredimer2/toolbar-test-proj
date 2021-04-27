const { parsed: localEnv } = require("dotenv").config();
module.exports = { distDir: "build" };
// const withCSS = require("@zeit/next-css");

// const webpack = require("webpack");

// module.exports = withCSS({
//   webpack: config => {
//     const env = { };
//     config.plugins.push(new webpack.DefinePlugin(env));
//     return config;
//   }
// });

