<template>
  <c-box>
    <c-box>Hello {{ username }}</c-box>
    <c-button @click="joinChat">Join Chat</c-button>
    <chat :leecher="user"/>
  </c-box>
</template>

<script>
import chat from '@/components/private/sessions/Chat.vue';

export default {
  components: {
    chat,
  },
  data() {
    return {
      username: '',
      user: '',
    };
  },
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
  async fetch() {
    this.username = await this.$auth.$storage.getUniversal('username');
    const token = await this.$auth.strategy.token.get();

    const data = await this.$axios.$get(
      // url,
      `${process.env.BACKEND_URL}/user/sessions/${this.username}`,
      {
        headers: { Authorisation: token },
      },
    );

    this.user = data;
    const messsageRef = this.$fire.database.ref('channels');
    console.log(this.user);
    console.log(messsageRef);
    const test = await fetch(`${messsageRef.toString()}.json`);
    console.log(test);
  },
};
</script>
