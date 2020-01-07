const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withMjs = require("./plugins/withMjs");

module.exports = withSass(withCSS(withMjs()));
