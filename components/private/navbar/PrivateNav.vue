<!-- eslint-disable vue/no-mutating-props -->
<template>
  <c-box as="nav" h="60px" px="4" d="flex" align-items="center" shadow="sm">
    <c-link
      as="nuxt-link"
      to="/"
      fontSize="2xl"
      color="yellow.400"
      font-weight="bold"
      :_hover="{ color: 'gray.300' }"
      @click="
                () => {
                  isOptionSelected = false;
                  searchedSessions = [];
                  showDabaoerFlow = false;
                }
              "
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
        <c-box as="li" mr="8" color="gray.400">
          <nuxt-link to="/home#about">About</nuxt-link>
        </c-box>
      <nav-item
        v-for="item in navBarItems"
        :key="item"
        :text="item"
        :link="item"
      />
      <c-box as="li" mr="8">
        <c-button @click="logout">Logout</c-button>
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
import NavItem from '@/components/common/navbar/NavItem.vue';

export default {
  name: 'PrivateNav',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  props: ['showDabaoerFlow', 'isOptionSelected', 'searchedSessions'],
  components: {
    NavItem,
  },
  data() {
    return {
      navBarItems: ['sessions', 'leaderboard', 'account'],
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
