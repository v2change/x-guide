import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Guide',
  logo: '/logo.svg',
  favicon: '/logo.svg',
  outputPath: 'docs-dist',
  description: '为新用户提供指导',
  publicPath: process.env.NODE_ENV === 'production' ? '/x-guide/' : '/',
  // more config: https://d.umijs.org/config
});
