<template>
  <c-box>
    <button
      type="button"
      class="btn btn-dabao fw-bold btn-lg animate__animated animate__fadeInDown"
      v-show="!apiCalled"
      m="4"
      @click="createSession"
    >
      Submit
    </button>
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
          bg="#fff"
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
    field: Object,
  },
  data() {
    return {
      apiSuccess: false,
      apiCalled: false,
    };
  },
  methods: {
    async createSession() {
      this.apiCalled = true;
      const username = await this.$auth.$storage.getUniversal('username');
      const token = await this.$auth.strategy.token.get();
      const date = this.field[2].toISOString();
      const url = `${process.env.BACKEND_URL}/session/create`;
      const data = await this.$axios.$post(
        url,
        {
          postal_code: this.field[0],
          food: this.field[1],
          departure_time: date,
          username,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
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
