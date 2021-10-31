<template>
  <c-box as="nav" h="60px" px="4" d="flex" align-items="center" shadow="sm">
    <c-link
      as="nuxt-link"
      to="/"
      fontSize="3xl"
      color="yellow.400"
      font-weight="bold"
      :_hover="{ color: 'gray.300' }"
    >
      DabaoHero.
    </c-link>

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
          to="#about"
          color="gray.500"
          :_hover="{ color: 'yellow.400' }"
        >
          About
        </c-link>
      </c-box>
      <c-box as="li" mr="8">
        <c-link
          as="nuxt-link"
          to="#leaderboard"
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
