import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  extraPostCSSPlugins: [require('tailwindcss'), require('autoprefixer')],
  mfsu: {},
  layout: {
    name: '嘉立创',
  },
});
