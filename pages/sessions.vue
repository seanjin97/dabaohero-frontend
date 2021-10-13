<template>
  <c-box>
    <c-box>sessions page</c-box>
    <c-box>Hello {{ username }}</c-box>
    <c-button @click="joinChat">Join Chat</c-button>
  </c-box>
</template>

<script>
export default {
  methods: {
    async joinChat() {
      const messageRef = this.$fire.database.ref('test');
      try {
        // await messageRef.set({
        //   name: this.username,
        //   message: 'Nuxt-Fire with Firebase Realtime Database rocks!',
        // });
        await messageRef.push({ name: this.username, message: 'hello' });
      } catch (e) {
        alert(e);
      }
    },
  },
  data() {
    return {
      username: '',
    };
  },
  async fetch() {
    this.username = await this.$auth.$storage.getUniversal('username');

    const messsageRef = this.$fire.database.ref('channels');
    console.log(messsageRef);
    const test = await fetch(`${messsageRef.toString()}.json`);
    console.log(test);
  },
};
</script>
