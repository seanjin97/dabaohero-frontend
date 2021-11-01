<template>
  <div>
    <p v-show="this.$auth.loggedIn">Hello user "{{ username }}"</p>
    <p> leaderboard page </p>
    <leaderboard :details="user"/>
  </div>
</template>

<script>
import leaderboard from '@/components/public/leaderboard/leaderboard.vue';

export default {
  components: { leaderboard },
  data() {
    return {
      user: [],
      token: '',
      refreshToken: '',
      username: '',
      details: '',
    };
  },
  methods: {
    async getToken() {
      const token = await this.$auth.strategy.token.get();
      const refreshToken = await this.$auth.strategy.refreshToken.get();
      this.token = await token;
      this.refreshToken = await refreshToken;
    },
    topFour(data) {
      // eslint-disable-next-line prefer-spread
      const topN = (arr, n) => {
        if (n > arr.length) {
          return false;
        }
        return arr
          .slice()
          .sort((a, b) => b.duration - a.duration)
          .slice(0, n);
      };
      const arrXY = [];
      const topNResults = topN(data, 4);

      if (topNResults.length !== 0) {
        topNResults.forEach((top) => {
          const orders = top.completed_orders;
          const name = top.key;
          arrXY.push({ name, orders });
        });
        return arrXY;
      }
      return null;
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
    this.user = this.topFour(data);
  },
};
</script>
