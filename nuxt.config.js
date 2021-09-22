// import IO options
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dabaohero-frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion',
    '@nuxtjs/auth-next',
    'nuxt-socket-io',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  chakra: {
    config: {
      /**
       * Setting this value to false disables
       * component auto-import in your Vue templates
       * @type {Boolean}
       * */
      autoImport: true,
    },
  },
  extendTheme: {
    colors: {
      brand: { /* ... */ },
    },
  },
  auth: {
    strategies: {
      auth0: {
        domain: process.env.AUTH_DOMAIN,
        clientId: process.env.CLIENT_AUTH_CLIENT_ID,
        scope: ['openid', 'profile', 'email', 'offline_access'],
        responseType: 'code',
        grantType: 'authorization_code',
        codeChallengeMethod: 'S256',
        audience: 'dabaohero-backend',
      },
    },
    redirect: {
      login: '/',
      callback: '/home',
      home: 'home',
    },
    plugins: [
      '~/plugins/username.js',
    ],
  },
  router: {
    middleware: ['auth'],
  },
  io: {
    sockets: [{
      name: 'main',
      url: process.env.SOCKET_URL,
    }],
  },
  serverMiddleware: [
    '~/api/management',
  ],
};
