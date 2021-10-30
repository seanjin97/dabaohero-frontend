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
    script: [
      { src: 'https://kit.fontawesome.com/1d06bc2a38.js', crossorigin: 'anonymous' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
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
    '@nuxtjs/firebase',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
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
    plugins: ['~/plugins/auth.js'],
  },
  router: {
    middleware: ['auth'],
  },
  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DB_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
    services: {
      database: true, // this is the realtime database service
    },
  },
};
