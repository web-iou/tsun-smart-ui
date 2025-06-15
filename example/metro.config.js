const path = require("path");
const { getDefaultConfig } = require("@expo/metro-config");
const { withMetroConfig } = require("react-native-monorepo-config");

const root = path.resolve(__dirname, "..");

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = withMetroConfig(getDefaultConfig(__dirname), {
  root,
  dirname: __dirname,
});
config.resolver.disableHierarchicalLookup = true;
config.resolver.unstable_enablePackageExports = true;

// 添加字体文件支持
config.resolver.assetExts.push("ttf", "otf", "woff", "woff2");
config.resolver.platforms = ["ios", "android", "native", "web"];

module.exports = config;
