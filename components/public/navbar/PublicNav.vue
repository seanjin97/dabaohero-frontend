<!--eslint-disable max-len-->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" width="100%">
    <div class="container-fluid">
      <c-link
        as="nuxt-link"
        to="/"
        class="fw-bold text-warning text-decoration-none"
        color="gray.400"
        :_focus="{ outline: 'none' }"
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
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link px-3" href="/#about">About</a>
          </li>
          <c-box as="li" mr="5" px="3">
            <c-button :_hover="{ color: 'yellow.400' }" @click="login"
              >Login</c-button
            >
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
