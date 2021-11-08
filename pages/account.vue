<template>
  <profile :userData="userData" :active_sessions="active_sessions" :loginDate="loginDate"/>
</template>

<script>
import Profile from '../components/private/profile/Profile.vue';

export default {
  data() {
    return {
      userData: {},
      email: '',
      loginDate: '',
      active_sessions: null,
    };
  },
  methods: {
    lastLogin() {
      const lastDate = this.userData.last_login;
      const date = lastDate.split('T')[0];
      const time = lastDate.split('T')[1].slice(0, 8);
      const actualDatetime = `${date} ${time}`;
      return actualDatetime;
    },
    activeSessions() {
      return this.userData.active_sessions.length;
    },
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
    this.loginDate = this.lastLogin();
    this.active_sessions = this.activeSessions();
  },
};

</script>
