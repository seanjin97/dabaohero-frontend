<template>
  <c-box maxW="sm" border-width="2px" rounded="lg" margin="3">
    <c-image :src="require(`../../../assets/Image${randomImage}.jpg`)" />
    <c-text fontWeight="bold" m="4">{{ session.food }}</c-text>

    <c-button
      m="4"
      class="btn btn-dabao"
      fontWeight="bold"
      size="lg"
      bg="white"
      :_hover="{
        color: '#fff',
        fontSize: '20px',
        size: 'xxl',
        border: '10px',
        paddingBottom: '2',
        borderColor: '#ffc107',
        height: '65px',
      }"
      v-show="!apiCalled"
      @click="joinSession"
      >Join Session</c-button
    >
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
        <c-button
          m="4"
          class="btn btn-dabao"
          fontWeight="bold"
          size="lg"
          bg="white"
          :_hover="{
            color: '#fff',
            fontSize: '20px',
            size: 'xxl',
            border: '10px',
            paddingBottom: '2',
            borderColor: '#ffc107',
            height: '65px',
          }"
          v-show="apiCalled && apiSuccess"
          >Chat</c-button
        >
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
          <button class="m-3 btn btn-dabao fw-bold btn-lg">
            <c-link
              as="nuxt-link"
              to="sessions"
              :_hover="{ textDecoration: 'none', color: 'white' }"
            >
              Confirm?
            </c-link>
          </button>
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
      const { username } = this.$store.state;
      const url = `${process.env.BACKEND_URL}/session/join`;
      const token = await this.$auth.strategy.token.get();
      const data = await this.$axios.$post(
        url,
        {
          session_code: this.session.key,
          username,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (data) {
        this.apiSuccess = true;
      }
    },
  },
  computed: {
    randomImage() {
      const num = Math.floor(Math.random() * 9 + 1);
      return num;
    },
  },
};
</script>

<style>
</style>
