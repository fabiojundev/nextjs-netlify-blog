const withYaml = require('next-plugin-yaml');
module.exports = withYaml({
  pageExtensions: ["tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        // {
        //   test: /\.yml$/,
        //   type: "json",
        //   use: "js-yaml-loader",
        // },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
});
