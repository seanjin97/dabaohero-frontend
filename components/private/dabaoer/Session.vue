<template>
  <c-box>
    <c-button v-show="!apiCalled" m="4" @click="createSession">Submit</c-button>
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
    field: Array,
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
      const today = new Date();
      const username = await this.$auth.$storage.getUniversal('username');
      const date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}T${this.field[2]}`;
      console.log(date);
      const url = `${process.env.BACKEND_URL}/session/create`;
      const data = await this.$axios.$post(url,
        {
          postal_code: this.field[0],
          food: this.field[1],
          departure_time: date,
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
