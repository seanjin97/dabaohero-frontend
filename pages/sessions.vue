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
        @endSession="endSession()"
        @clearSession="clearSessions()"
        :sessionsLoading="sessionsLoading"
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
      sessionsLoading: true,
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
    async endSession() {
      this.username = await this.$auth.$storage.getUniversal('username');
      const token = await this.$auth.strategy.token.get();
      const url = `${process.env.BACKEND_URL}/session/complete`;
      const data = await this.$axios.$post(
        url,
        {
          session_code: this.selectedChat,
          username: this.username,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (data) {
        this.clearSessions();
      }
    },
    clearSessions() {
      const updatedSessions = this.sessions.filter(
        (item) => item.key !== this.selectedChat,
      );
      this.sessions = updatedSessions;
      this.selectedChat = null;
    },
  },
  async fetch() {
    this.username = await this.$auth.$storage.getUniversal('username');
    const token = await this.$auth.strategy.token.get();

    this.sessions = await this.$axios.$get(
      `${process.env.BACKEND_URL}/user/sessions/${this.username}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    this.sessionsLoading = false;
    await this.$fire.auth.signInAnonymously();

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
