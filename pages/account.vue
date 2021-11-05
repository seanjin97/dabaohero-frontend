<template>
  <profile :userData="userData"/>
</template>

<script>
import Profile from '../components/private/profile/Profile.vue';

export default {
  data() {
    return {
      userData: Object,
      email: String,
    };
  },
  components: { Profile },
  async getToken() {
    const token = await this.$auth.strategy.token.get();
    const refreshToken = await this.$auth.strategy.refreshToken.get();
    this.token = await token;
    this.refreshToken = await refreshToken;
  },
  async fetch() {
    this.email = await this.$auth.user.email;
    const token = await this.$auth.strategy.token.get();
    const url = `http://localhost:8080/user/account/${this.email}`;
    const data = await this.$axios.$get(url,
      {
        headers: { Authorisation: token },
      });
    console.log(data);
    this.userData = data;
  },
};

</script>
