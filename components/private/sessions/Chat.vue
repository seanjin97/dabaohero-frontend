<template>
  <c-box>
    <c-box v-if="sessionId">
      <message
        v-for="(message, idx) in messages"
        :key="idx"
        :message="message"
        :username="username"
      />
      <c-input-group>
        <c-input v-model="newMessage" placeholder="Enter message." />
        <c-input-right-element>
          <c-button @click="emitMessage()">
            <i class="far fa-paper-plane"></i>
          </c-button>
        </c-input-right-element>
      </c-input-group>
    </c-box>
    <c-box v-else>Please select a session</c-box>
  </c-box>
</template>

<script>
import Message from './Message.vue';

export default {
  name: 'Chat',
  components: { Message },
  data() {
    return {
      newMessage: '',
    };
  },
  props: {
    sessionId: String,
    messages: Object,
    username: String,
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
};
</script>

<style>
</style>
