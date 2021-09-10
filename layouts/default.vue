<template>
  <c-theme-provider>
    <c-color-mode-provider #default="{ colorMode }">
      <c-box as="section" v-bind="mainStyles[colorMode]">
        <c-reset />
        <private-nav />
        <nuxt />
      </c-box>
    </c-color-mode-provider>
  </c-theme-provider>
</template>

<script>
import PrivateNav from '@/components/private/navbar/PrivateNav.vue';

export default {
  name: 'DefaultLayout',
  components: { PrivateNav },
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
};
</script>
