<template>
  <c-box>
    <c-form-control is-required>
      <c-input
        type="number"
        v-model="field"
        placeholder="Enter postal code"
        size="lg"
        mb="3"
        @keyup.enter="$emit('getPostal', field)"
      />
    </c-form-control>

    <c-simple-grid
      v-if="searchedSessions.length > 0"
      min-child-width="400px"
      spacing-x="5"
      spacing-y="10"
      margin="5"
      text-align="center"
    >
      <session
        v-for="session in searchedSessions"
        :key="session.key"
        :session="session"
        @joinSession="$emit('joinSession', $event)"
      />
    </c-simple-grid>
  </c-box>
</template>

<script>
import Session from './Session.vue';

export default {
  name: 'Leecher',
  props: { searchedSessions: Array },
  components: { Session },
  data() {
    return {
      user: [],
      field: '',
    };
  },
  methods: {
  },
};
</script>
