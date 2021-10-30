<template>
<div class="m-2">
  <div class="message my-message mt-2">
    <p class="font-weight-bold">
      {{
        username === message.name ? 'You' : message.name
      }}
    </p>
    <p>{{ message.message }}</p>
  </div>
</div>
  <!-- <c-box m="2">
    <c-text fontWeight="bold">{{
      username === message.name ? 'You' : message.name
    }}</c-text>
    <c-text>{{ message.message }}</c-text>
  </c-box> -->
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
