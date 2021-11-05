<template>
  <div>
    <p v-show="this.$auth.loggedIn">Hello user "{{ username }}"</p>
    <p> leaderboard page </p>
    <leaderboard :details="user"/>
92
  </div>
</template>

<script>
import leaderboard from '@/components/public/leaderboard/leaderboard.vue';

export default {
  components: { leaderboard },
  data() {
    return {
      user: '',
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
    const token = await this.$auth.strategy.token.get();
    const data = await this.$axios.$get(
      // url,
      'http://localhost:8080/leaderboard',
      {
        headers: { Authorisation: token },
      },
    );
    this.user = data;
  },
};
</script>
