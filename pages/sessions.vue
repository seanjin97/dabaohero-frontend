<template>
  <c-box>
    <c-box>Hello {{ username }}</c-box>
    <c-flex justify="center">
      <c-simple-grid height="500px" :columns="2" :spacing="400">
        <session-list :sessions="sessions" @selectSession="openChat($event)" />
        <chat
          @sendMessage="sendMessage($event)"
          :sessionId="selectedChat"
          :messages="filteredMessages"
          :username="username"
        />
      </c-simple-grid>
    </c-flex>
  </c-box>
</template>

<script>
import SessionList from '../components/private/sessions/SessionList.vue';
import Chat from '../components/private/sessions/Chat.vue';

export default {
  components: { SessionList, Chat },
  data() {
    return {
      username: '',
      sessions: [],
      selectedChat: null,
      messages: null,
    };
  },
  methods: {
    openChat(session) {
      this.selectedChat = session.key;
    },
    async sendMessage(data) {
      console.log(data);
      const messageRef = this.$fire.database.ref(`channels/${data.sessionId}`);
      try {
        await messageRef.push({
          name: this.username,
          message: data.message,
          createdAt: this.$fireModule.database.ServerValue.TIMESTAMP,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  async fetch() {
    this.username = await this.$auth.$storage.getUniversal('username');
    const token = await this.$auth.strategy.token.get();

    this.sessions = await this.$axios.$get(
      `${process.env.BACKEND_URL}/user/sessions/${this.username}`,
      {
        headers: { Authorisation: token },
      },
    );
    await this.$fire.database.ref('channels').on('value', (snapshot) => {
      const data = snapshot.val();
      this.messages = data;
    });
  },
  computed: {
    filteredMessages() {
      if (this.selectedChat && this.messages) {
        return this.messages[this.selectedChat];
      }
      return null;
    },
  },
};
</script>
