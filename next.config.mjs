/** @type {import('next').NextConfig} */
const repo = 'gscg-astros-invite';
const isProd = process.env.NODE_ENV === 'production';
export default {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : '' },
};
