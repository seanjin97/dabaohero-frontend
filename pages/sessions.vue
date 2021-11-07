<template>
  <c-box>
    <div class="flex justify-content-center mt-3">
      <chat-container
        @sendMessage="sendMessage($event)"
        :sessionId="selectedChat"
        :messages="filteredMessages"
        :username="username"
        :sessions="sessions"
        @selectSession="openChat($event)"
      />
    </div>
  </c-box>
</template>

<script>
import ChatContainer from '../components/private/sessions/ChatContainer.vue';

export default {
  components: { ChatContainer },
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
    console.log('hello');
    console.log(this.sessions);
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
