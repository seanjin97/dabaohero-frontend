<template>
  <c-box>
    <aboutapp />
    <appworks />
    <founding />
    <team />
    <div class="btn btn-primary">Hello</div>
  </c-box>
</template>

<script>
import aboutapp from '@/components/public/about/aboutapp.vue';

import appworks from '@/components/public/about/appworks.vue';

import founding from '@/components/public/about/founding.vue';

import team from '@/components/public/about/team.vue';

export default {
  components: {
    aboutapp,
    appworks,
    founding,
    team,
  },
};
</script>
