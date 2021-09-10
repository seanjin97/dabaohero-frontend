<template>
  <c-box>
    <c-box>public home page</c-box>
    <hero />
  </c-box>
</template>

<script>
import Hero from '@/components/common/Hero.vue';

export default {
  components: { Hero },
  layout: 'public',
  auth: 'guest',
};
</script>
