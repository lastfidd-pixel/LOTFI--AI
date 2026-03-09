module.exports = {
  images: {
    domains: ['example.com'], // Add your image domains
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/routes/:path*' // Proxy to API routes
      },
    ];
  },
};
