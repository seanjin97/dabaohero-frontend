<!--eslint-disable max-len-->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" width="100%">
    <div class="container-fluid">
      <c-link
        as="nuxt-link"
        to="/"
        class="fw-bold text-warning text-decoration-none"
        color="gray.400"
      >
        <img
          src="./img/DabaoHero Logo.png"
          width="30"
          height="20"
          class="d-inline-block align-text-top"
        />
        DabaoHero
      </c-link>

      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <c-box
            as="ul"
            color="gray.500"
            d="flex"
            align-items="center"
            list-style-type="none"
          >
            <c-box as="li" mr="8" color="gray.400">
              <nuxt-link to="#about">About</nuxt-link>
            </c-box>
            <c-box as="li" mr="8">
              <c-button @click="login">Login</c-button>
            </c-box>
          </c-box>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PublicNav',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
  },
  methods: {
    login() {
      this.$auth.loginWith('auth0');
    },
  },
};
</script>
