/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: isProd ? 'docs' : '.next',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? '/carter-20260702-carolina-core-youth' : '',
};

export default nextConfig;
