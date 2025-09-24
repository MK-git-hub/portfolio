/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/porfolio' : '',   
  assetPrefix: isProd ? '/porfolio/' : '',
  images: {
    unoptimized: true, 
  },
  trailingSlash: true,
};

module.exports = nextConfig;
