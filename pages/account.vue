<template>
  <c-box>
    <h1>this is /accoutn page</h1>
    <c-box>{{ user.key }}</c-box>
    <c-box>{{ user }}</c-box>
  </c-box>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  async fetch() {
    const token = await this.$auth.strategy.token.get();
    const username = await this.$auth.$storage.getUniversal('username');
    const data = await this.$axios.$get(
      `${process.env.BACKEND_URL}/user/account/${username}`,
      {
        headers: { Authorisation: token },
      },
    );
    console.log(await data);
    this.user = data;
  },
};
</script>

<style>
</style>
