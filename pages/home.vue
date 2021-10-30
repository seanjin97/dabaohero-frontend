<template>
  <c-box>
    <c-box ml="5" mt="5" v-show="this.$auth.loggedIn"
      >Hello user "{{ username }}"</c-box
    >
    <c-flex my="32" v-if="!isOptionSelected" justify="center">
      <c-button
        m="4"
        @click="
          () => {
            showDabaoerFlow = true;
            isOptionSelected = true;
          }
        "
      >
        Dabao</c-button
      >
      <c-button
        m="4"
        @click="
          () => {
            showDabaoerFlow = false;
            isOptionSelected = true;
          }
        "
        >Delivery</c-button
      >
    </c-flex>
    <c-box my="32">
      <c-flex justify="center">
        <c-box pos="absolute" left="500px">
          <c-button
            @click="
              () => {
                isOptionSelected = false;
                searchedSessions = [];
              }
            "
            mr="16"
            v-show="isOptionSelected"
          >
            <i class="fas fa-angle-left"></i>
          </c-button>
        </c-box>
        <dabaoer
          v-if="isOptionSelected && showDabaoerFlow"
          @createSession="getField"
        />
        <leecher
          v-else-if="isOptionSelected && !showDabaoerFlow"
          :searchedSessions="searchedSessions"
          @getPostal="getField"
          v-on:click="getKey"
          @joinSession="getKey"
        />
      </c-flex>
    </c-box>
    <c-button v-show="this.$auth.loggedIn" @click="getToken">
      Get Token
    </c-button>

    <c-box v-show="this.$auth.loggedIn">{{ 'Access token: ' + token }}</c-box>
    <c-box v-show="this.$auth.loggedIn">{{
      'Refresh token: ' + refreshToken
    }}</c-box>
  </c-box>
</template>

<script>
import Leecher from '@/components/private/leecher/Leecher.vue';
import Dabaoer from '@/components/private/dabaoer/Dabaoer.vue';

export default {
  components: {
    Leecher,
    Dabaoer,
  },
  data() {
    return {
      token: '',
      refreshToken: '',
      username: '',
      data: [],
      searchedSessions: [],
      field: '',
      key: '',
      showDabaoerFlow: false,
      isOptionSelected: false,
    };
  },

  methods: {
    async getToken() {
      const token = await this.$auth.strategy.token.get();
      const refreshToken = await this.$auth.strategy.refreshToken.get();
      this.token = await token;
      this.refreshToken = await refreshToken;
    },
    getField(x) {
      this.field = x;
      if (this.field.length === 3) {
        this.createSession();
      } else {
        this.fetching();
      }
    },
    async fetching() {
      const url = `${process.env.BACKEND_URL}/session/search?username=${this.username}&postal_code=${this.field}`;
      const token = await this.$auth.strategy.token.get();

      const data = await this.$axios.$get(url, {
        headers: { Authorisation: token },
      });
      this.searchedSessions = data;
    },

    getKey(x) {
      this.key = x;
      this.fetchSession();
    },
    async fetchSession() {
      const url = `${process.env.BACKEND_URL}/session/join`;
      const data = await this.$axios.$post(url, {
        session_code: this.key,
        username: this.username,
      });
      console.log(data);
    },
    async createSession() {
      const url = `${process.env.BACKEND_URL}/session/create`;
      const data = await this.$axios.$post(url, {
        postal_code: this.field[0],
        food: this.field[1],
        departure_time: this.field[2],
        username: this.username,
      });
      console.log(data);
    },
  },
  async fetch() {
    this.username = await this.$auth.$storage.getUniversal('username');
  },
};
</script>
