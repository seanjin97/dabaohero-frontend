<!--eslint-disable max-len-->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" width="100%">
  <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <c-link
        as="nuxt-link"
        to="/"
        fontSize="2xl"
        color="yellow.400"
        font-weight="bold"
        :hover="{ color: 'gray.300' }"
        @click="
                  () => {
                    isOptionSelected = false;
                    searchedSessions = [];
                    showDabaoerFlow = false;
                  }
                "
      >
        DabaoHero
      </c-link>
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
              <nuxt-link to="/home#about">About</nuxt-link>
            </c-box>
            <c-box as="li" mr="8">
              <c-button @click="login">Login</c-button>
            </c-box>
            <c-box as="li">
              <c-icon-button
                variant="ghost"
                variant-color="gray[900]"
                :aria-label="`Switch to ${
                  colorMode === 'light' ? 'dark' : 'light'
                } mode`"
                :icon="colorMode == 'light' ? 'moon' : 'sun'"
                @click="$toggleColorMode"
              />
            </c-box>
          </c-box>
    <c-box
      as="ul"
      color="gray.500"
      d="flex"
      align-items="center"
      list-style-type="none"
      ml="auto"
    >
      <c-box as="li" mr="8">
        <c-link
          as="nuxt-link"
          to="/#about"
          color="gray.500"
          :_hover="{ color: 'yellow.400' }"
        >
          About
        </c-link>
      </c-box>
      <c-box as="li" mr="8">
        <c-link
          as="nuxt-link"
          to="leaderboard"
          color="gray.500"
          :_hover="{ color: 'yellow.400' }"
        >
          Leaderboard
        </c-link>
      </c-box>
      <c-box as="li" mr="8">
        <c-button @click="login">Login</c-button>
      </c-box>
      <c-box as="li">
        <c-icon-button
          variant="ghost"
          variant-color="gray[900]"
          :aria-label="`Switch to ${
            colorMode === 'light' ? 'dark' : 'light'
          } mode`"
          :icon="colorMode == 'light' ? 'moon' : 'sun'"
          @click="$toggleColorMode"
        />
      </c-box>
    </c-box>
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
