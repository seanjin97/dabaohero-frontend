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
        <img src="./img/DabaoHero Logo.png" width="30" height="20"
        class="d-inline-block align-text-top">
         <a href="/" class="text-decoration-none">DabaoHero</a>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/sessions">Sessions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/leaderboard">Leaderboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/account">Account</a>
            </li>
          </ul>
        </div>

      <!-- <c-link
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
        </ul>
      </div>

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
            to="/home#about"
            color="gray.400"
            :_hover="{ color: 'yellow.400' }"
          >
            About
          </c-link>
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
      </c-box> -->
    </div>
  </nav>
  <!-- </c-box> -->
</template>

<script>
// import NavItem from '@/components/common/navbar/NavItem.vue';

export default {
  name: 'PrivateNav',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  props: ['showDabaoerFlow', 'isOptionSelected', 'searchedSessions'],
  components: {
    // NavItem,
  },
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
