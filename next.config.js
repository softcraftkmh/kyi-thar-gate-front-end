const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withMjs = require("./plugins/withMjs");
const withAbsoluteImport = require("./plugins/withAbsoluteImport");

module.exports = withSass(withCSS(withMjs(withAbsoluteImport())));
