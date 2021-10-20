<template>
  <c-box>
    <hero />
    <c-button v-show="this.$auth.loggedIn" @click="getToken">Get Token</c-button>
    <c-box v-show="this.$auth.loggedIn">{{ 'Access token: ' + token }}</c-box>
    <c-box v-show="this.$auth.loggedIn">{{
      'Refresh token: ' + refreshToken
    }}</c-box>
  </c-box>
</template>

<script>
import Hero from '@/components/public/home/hero.vue';

export default {
  components: {
    Hero,
  },
  data() {
    return {
      token: '',
      refreshToken: '',
      username: '',
    };
  },
  methods: {
    async getToken() {
      const token = await this.$auth.strategy.token.get();
      const refreshToken = await this.$auth.strategy.refreshToken.get();
      this.token = await token;
      this.refreshToken = await refreshToken;
    },
  },
  async fetch() {
    this.username = await this.$auth.$storage.getUniversal('username');
  },
};
</script>
