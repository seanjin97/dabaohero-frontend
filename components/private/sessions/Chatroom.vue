<template>
  <c-box>
    <session-list />
  </c-box>
</template>

<script>
import SessionList from './SessionList.vue';

export default {
  name: 'SessionList',
  components: {
    SessionList,
  },
  data() {
    return {};
  },
};
</script>
