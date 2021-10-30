<template>
  <c-grid-item
    display="flex"
    justify-content="center"
    align-items="center"
    col-span="2"
    bg="blue.50"
    cursor="pointer"
  >
    <c-box @click="$emit('selectSession', session)" align="center" bg="blue.50">
      <c-text fontSize="3xl">{{ trimmedId }}</c-text>
      <c-text fontSize="xl">{{ session.food }}</c-text>
      <c-text fontSize="md">Host: {{ session.dabaoer }}</c-text>
    </c-box>
  </c-grid-item>
</template>

<script>
export default {
  name: 'Session',
  props: {
    session: Object,
  },
  computed: {
    trimmedId() {
      if (this.session) {
        return this.session.key.slice(0, 5);
      }
      return null;
    },
  },
};

</script>
