/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      // target: 'http://112.124.109.250:3045', 线上地址
      target: 'http://localhost:3045',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
    },
  },
  test: {
    '/api/': {
      target: 'http://112.124.109.250:3030',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'http://112.124.109.250:3045',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
