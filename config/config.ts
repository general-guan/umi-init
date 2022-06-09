import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  extraPostCSSPlugins: [require('tailwindcss'), require('autoprefixer')],
  mfsu: {},
  layout: {
    name: '嘉立创',
  },
});
