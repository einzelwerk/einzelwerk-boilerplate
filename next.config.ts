import svg from '@neodx/svg/webpack';
import { createJiti } from 'jiti';
import { NextConfig } from 'next';

const jiti = createJiti(import.meta.url);
jiti.import('./src/env.mjs');

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        svg({
          root: 'assets',
          output: 'public'
        })
      );
    }
    return config;
  }
};

export default nextConfig;
