/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'http2.mlstatic.com',
            },
        ],
    },
}
const withImages = require('next-images');

module.exports = withImages({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: './public/images',
          },
        },
      ],
    });

    return config;
  },
});

module.exports = nextConfig
