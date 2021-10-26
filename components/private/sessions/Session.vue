<template>
  <c-box
    @click="$emit('selectSession', session)"
    cursor="pointer"
    border="1px"
    borderColor="grey.200"
    align="center"
    bg="blue.50"
  >
    <c-text fontSize="3xl">{{ session.food }}</c-text>
    <c-text fontSize="md">Host: {{ session.dabaoer }}</c-text>
  </c-box>
</template>

<script>
export default {
  name: 'Session',
  props: {
    session: Object,
  },
};
</script>
