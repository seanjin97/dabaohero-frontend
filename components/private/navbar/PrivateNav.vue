<!-- eslint-disable vue/no-mutating-props -->
<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light shadow-sm" width="100%"
  style="background-color: #fffefbf3">
    <div class="container-fluid">
      <c-link
        as="nuxt-link"
        to="/home"
        class="fw-bold fs-5 text-warning text-decoration-none"
        color="gray.400"
        :_focus="{ outline: 'none' }"
        @click="
          () => {
            isOptionSelected = false;
            searchedSessions = [];
            showDabaoerFlow = false;
          }
        "
      >
        <img
          src="./img/DabaoHero Logo.png"
          width="25"
          height="25"
          class="d-inline-block align-text-center"
          aria-label="logo"
          style = "position:relative; top:-2px;"
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

      <c-box class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link px-3 " href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3" href="/home#features">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3" href="/sessions">Sessions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3" href="/leaderboard">Leaderboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3" href="/account">Account</a>
          </li>
          <c-box as="li" mr="5" px="3">
            <c-button :_hover="{ color: 'yellow.400' }" @click="logout"
              >Logout</c-button
            >
          </c-box>
        </ul>
      </c-box>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PrivateNav',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  props: ['showDabaoerFlow', 'isOptionSelected', 'searchedSessions'],

  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>
