import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: process.env.AXIOS_BASE_URL,
      changeOrigin: true,
    }
  }
});
