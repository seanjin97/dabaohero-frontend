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
