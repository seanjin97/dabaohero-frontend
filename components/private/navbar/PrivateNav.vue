<!--eslint-disable max-len-->
<!-- eslint-disable vue/no-mutating-props -->
<template>
  <!-- <c-box as="nav" h="60px" px="4" d="flex" align-items="center" shadow="lg"> -->
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm" width="100%">
      <div class="container-fluid">

        <a class="navbar-brand"
          @click="
            () => {
              isOptionSelected = false;
              searchedSessions = [];
              showDabaoerFlow = false;
            }
          ">
          <img src="./img/DabaoHero Logo.png" width="30" height="20" class="d-inline-block align-text-top">
          <a href="/" class="fw-bold text-warning text-decoration-none">DabaoHero</a>
        </a>

        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link px-3" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" href="#about">About</a>
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
            <!-- <c-box as="li">
              <c-icon-button
                variant="ghost"
                variant-color="gray"
                :icon="colorMode == 'light' ? 'moon' : 'sun'"
                @click="$toggleColorMode"
              />
            </c-box> -->
            <c-box as="li" mr="5" px="3">
              <c-button :_hover="{ color: 'yellow.400' }"
              @click="logout">Logout</c-button>
            </c-box>
          </ul>
        </div>

    </div>
  </nav>
</template>

<script>

export default {
  name: 'PrivateNav',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  props: ['showDabaoerFlow', 'isOptionSelected', 'searchedSessions'],

  data() {
    return {
      navBarItems: ['about', 'sessions', 'leaderboard', 'account'],
    };
  },
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
