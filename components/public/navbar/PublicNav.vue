<template>
  <nav
    class="navbar sticky-top navbar-expand-lg navbar-light shadow-sm"
    width="100%"
    style="background-color: #fffefbf3"
  >
    <div class="container-fluid">
      <c-link
        as="nuxt-link"
        to="/#"
        class="fw-bold text-warning text-decoration-none"
        color="gray.400"
        :_focus="{ outline: 'none' }"
      >
        <img
          src="./img/DabaoHero Logo.png"
          width="30"
          height="20"
          class="d-inline-block align-text-center"
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
      <c-box
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link px-3" href="/#features">Features</a>
          </li>
          <c-box as="li" mr="5" px="3">
            <c-button :_hover="{ color: 'yellow.400' }" @click="login"
              >Login</c-button
            >
          </c-box>
        </ul>
      </c-box>
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
