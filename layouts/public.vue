<template>
  <c-theme-provider>
    <c-color-mode-provider #default="{ colorMode }">
      <c-box as="section" v-bind="mainStyles[colorMode]">
        <c-reset />
        <public-nav />
        <nuxt />
      </c-box>
    </c-color-mode-provider>
  </c-theme-provider>
</template>

<script>
import PublicNav from '@/components/public/navbar/PublicNav.vue';

export default {
  name: 'PublicLayout',
  components: { PublicNav },
  data() {
    return {
      mainStyles: {
        dark: {
          bg: 'gray.900',
          color: 'whiteAlpha.900',
        },
        light: {
          bg: 'whiteAlpha.900',
          color: 'gray.900',
        },
      },
    };
  },
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css' },
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js', type: 'text/javascript' },
      ],
    };
  },
};
</script>
