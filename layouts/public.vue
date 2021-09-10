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
};
</script>
