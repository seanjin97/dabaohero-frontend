<template>
  <c-box>
    <c-box ml="5" mt="5" v-show="this.$auth.loggedIn">Hello user "{{ username }}"</c-box>
    <hero :leecher="user" v-on:change="getField" @getPostal="getField"
    v-on:click="getKey" @joinSession="getKey"/>
    <c-button v-show="this.$auth.loggedIn" @click="getToken">
      Get Token
    </c-button>
    <!-- <c-box>{{user.food}}</c-box> -->
    <c-box v-show="this.$auth.loggedIn">{{ 'Access token: ' + token }}</c-box>
    <c-box v-show="this.$auth.loggedIn">{{ 'Access token: ' + token }}</c-box>
    <c-box v-show="this.$auth.loggedIn">{{
      'Refresh token: ' + refreshToken
    }}</c-box>
  </c-box>
</template>

<script>
import Hero from '@/components/common/Hero.vue';

export default {
  components: {
    Hero,
  },
  data() {
    return {
      token: '',
      refreshToken: '',
      username: '',
      data: [],
      user: '',
      field: '',
      key: '',
    };
  },

  methods: {
    async getToken() {
      const token = await this.$auth.strategy.token.get();
      const refreshToken = await this.$auth.strategy.refreshToken.get();
      this.token = await token;
      this.refreshToken = await refreshToken;
    },
    getField(x) {
      this.field = x;
      // console.log('here', this.fetching());
      this.fetching();
    },
    async fetching() {
      const url = `${process.env.BACKEND_URL}/session/search?username=${this.username}&postal_code=${this.field}`;
      const token = await this.$auth.strategy.token.get();

      const data = await this.$axios.$get(
        url,
        {
          headers: { Authorisation: token },
        },
      );
      this.user = data;
    },

    getKey(x) {
      this.key = x;
      this.fetchSession();
    },
    async fetchSession() {
      const url = `${process.env.BACKEND_URL}/session/join`;
      // console.log(url);
      // const token = await this.$auth.strategy.token.get();

      const data = await this.$axios.$post(
        url, {
          session_code: this.key,
          username: this.username,
        },

      );
      this.user = data;
    },
  },

  async fetch() {
    this.username = await this.$auth.$storage.getUniversal('username');
    const token = await this.$auth.strategy.token.get();

    const data = await this.$axios.$get(
      // url,
      `${process.env.BACKEND_URL}/session/search?postal_code=519940`,
      {
        headers: { Authorisation: token },
      },
    );
    this.user = data;
  },
};
</script>
