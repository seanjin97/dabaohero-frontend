<template>
  <c-box>
    <c-box>sessions page</c-box>
    <c-button @click="sendMessage">send message</c-button>
  </c-box>
</template>

<script>
export default {
  data() {
    return {
      socket: null,
    };
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/',
      persist: 'socket',
    });
    // join rooms
    // code here
    // https:// dev.to/richardeschloss/nuxt-socket-io-how-to-create-a-stealth-mode-chat-application-in-under-10-minutes-1m2g
    /* Listen for events: */
    this.socket.on('message', (msg) => {
      /* Handle event */
      console.log(msg);
    });
  },
  methods: {
    async sendMessage() {
      this.socket.emit('sendMessage', {
        name: await this.$auth.$storage.getUniversal('username'),
        message: 'hello world',
      });
    },
  },
};
</script>
