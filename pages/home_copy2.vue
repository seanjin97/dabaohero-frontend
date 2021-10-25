<template>
  <c-box>
    <c-box ml="5" mt="5" v-show="this.$auth.loggedIn">Hello user "{{ username }}"</c-box>
    <hero :dabaoer="user" v-on:change="getField, fetching" @getPostal="getField"/>
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
    },
    fetching() {
      this.username = this.$auth.$storage.getUniversal('username');
      const url = `${process.env.BACKEND_URL}/session/search?postal_code=${this.field}`;
      console.log(url);
      const token = this.$auth.strategy.token.get();

      const data = this.$axios.$get(
        url,
        {
          headers: { Authorisation: token },
        },
      );
      console.log(data);
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
    console.log(this.user);
  },
};
</script>
