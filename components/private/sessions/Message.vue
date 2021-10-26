<template>
  <c-box m="2">
    <c-text fontWeight="bold">{{
      username === message.name ? 'You' : message.name
    }}</c-text>
    <c-text>{{ message.message }}</c-text>
  </c-box>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: Object,
    username: String,
  },
};
</script>
