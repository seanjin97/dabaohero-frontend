<template>
  <c-box m="2" :align="username === message.name ? 'right' : 'left'">
    <c-box
      mt="2"
      align
      class="message my-message"
      :bg="username === message.name ? 'yellow.50' : 'gray.50'"
      :_after="{ borderBottomColor: 'yellow.50' }"
    >
      <c-text fontWeight="bold" align="left">
        {{ username === message.name ? 'You' : message.name }}
      </c-text>
      <c-text align="left">{{ message.message }}</c-text>
    </c-box>
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
