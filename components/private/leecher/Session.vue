<template>
  <c-box maxW="sm" border-width="1px" rounded="lg">
    <c-image :src="require('@/assets/Image1.jpg')" />
    <c-text fontWeight="bold" m="4">{{ session.food }}</c-text>

    <c-button v-show="!apiCalled" m="4" @click="joinSession">Join</c-button>
    <c-spinner
      m="4"
      v-show="apiCalled && !apiSuccess"
      thickness="4px"
      speed="0.65s"
      color="vue.500"
      size="xl"
    />

    <c-popover>
      <c-popover-trigger>
        <c-button m="4" v-show="apiCalled && apiSuccess">Chat</c-button>
      </c-popover-trigger>
      <c-popover-content z-index="4">
        <c-popover-arrow />
        <c-popover-close-button />
        <c-popover-header>Confirmation</c-popover-header>
        <c-popover-body>
          <c-text
            >This will bring you to the sessions page. Do you want to
            continue?</c-text
          >
          <c-button m="4">
            <c-link
              as="nuxt-link"
              to="sessions"
              :_hover="{ color: 'blue.500' }"
            >
              leggo
            </c-link>
          </c-button>
        </c-popover-body>
      </c-popover-content>
    </c-popover>
  </c-box>
</template>

<script>
export default {
  name: 'Session',
  props: {
    session: Object,
  },
  data() {
    return {
      apiSuccess: false,
      apiCalled: false,
    };
  },
  methods: {
    async joinSession() {
      this.apiCalled = true;
      const username = await this.$auth.$storage.getUniversal('username');
      const url = `${process.env.BACKEND_URL}/session/join`;
      const data = await this.$axios.$post(url,
        {
          session_code: this.session.key,
          username,
        });
      if (data) {
        this.apiSuccess = true;
      }
      console.log(data);
    },
  },
};
</script>

<style>
</style>
