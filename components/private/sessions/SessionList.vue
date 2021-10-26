<template>
  <c-box>
    <session
      v-for="session in sessions"
      :key="session.key"
      :session="session"
      @selectSession="$emit('selectSession', $event)"
    />
  </c-box>
</template>

<script>
import Session from './Session.vue';

export default {
  name: 'SessionList',
  components: { Session },
  props: {
    sessions: Array,
  },
};
</script>
