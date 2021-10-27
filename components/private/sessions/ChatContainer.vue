<template>
  <c-box>
    <c-flex justify="center">
      <c-grid
        h="600px"
        w="1000px"
        template-rows="repeat(4, 2fr)"
        template-columns="repeat(7, 1fr)"
        gap="3"
        margin-top="10"
      >
        <c-grid-item row-span="4" col-span="5" bg="blue.300">
          <c-grid-item v-show="sessionId">
            <c-grid-item bg="grey" height="10" padding-left="2" padding-top="2">
              <c-text color="white">Session {{ trimmedId }}</c-text>
            </c-grid-item>
            <c-grid-item v-show="sessionId" p="15">
              <c-stack pos="relative" h="530px">
                <c-box>
                  <message
                    v-for="(message, idx) in messages"
                    :key="idx"
                    :message="message"
                    :username="username"
                  />
                </c-box>

                <c-box pos="absolute" w="670px" bottom="0">
                  <c-flex>
                    <c-input
                      @keyup.enter="emitMessage()"
                      v-model="newMessage"
                      placeholder="Enter message."
                    />
                    <c-button @click="emitMessage()">
                      <i class="far fa-paper-plane"></i>
                    </c-button>
                  </c-flex>
                </c-box>
              </c-stack>
            </c-grid-item>
          </c-grid-item>

          <c-grid-item
            v-show="!sessionId"
            color="white"
            text-align="center"
            my="265"
          >
            <h1>Select a chat to get started</h1>
          </c-grid-item>
        </c-grid-item>

        <session
          v-for="session in sessions"
          :key="session.key"
          :session="session"
          @selectSession="$emit('selectSession', $event)"
        />
      </c-grid>
    </c-flex>
  </c-box>
</template>

<script>
import Message from './Message.vue';
import Session from './Session.vue';

export default {
  name: 'Chat',
  components: { Message, Session },
  data() {
    return {
      newMessage: '',
    };
  },
  props: {
    sessionId: String,
    messages: Object,
    username: String,
    sessions: Array,
  },
  methods: {
    emitMessage() {
      if (this.newMessage) {
        this.$emit('sendMessage', {
          message: this.newMessage,
          sessionId: this.sessionId,
        });

        this.newMessage = '';
      }
    },
  },
  computed: {
    trimmedId() {
      if (this.sessionId) {
        return this.sessionId.slice(0, 5);
      }
      return null;
    },
  },
};
</script>

<style>
</style>
