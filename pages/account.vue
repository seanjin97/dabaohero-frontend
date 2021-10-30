<template>
  <c-box align="center">
    <c-form-control>
      <c-form-label for="email">Email address</c-form-label>
      <c-input type="email" id="email" aria-describedby="email-helper-text" />
      <c-form-helper-text id="email-helper-text">
        We'll never share your email.
      </c-form-helper-text>
  </c-form-control>
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
