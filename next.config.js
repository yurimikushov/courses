module.exports = {
  images: {
    domains: [new URL(process.env.NEXT_PUBLIC_API).host],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
}
