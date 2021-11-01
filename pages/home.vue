<!-- eslint-disable max-len -->
<template>
  <div>
    <div class="container-fluid ">
      <div class="px-5 pt-5 my-1 text-center min-vh-75 bg-gradient">
        <h1 class="display-4 fw-bold animate__animated animate__fadeInLeft">Welcome, {{username}}.</h1> <br>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">DabaoHero aims to promote hawker businesses in Singapore by encouraging more takeaways, without involving the hawkers themselves.</p>
          <div v-if="!isOptionSelected" class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" class="btn btn-warning fw-bold btn-lg px-4 me-sm-3 shadow-sm animate__animated animate__fadeIn"
            @click="
              () => {
                showDabaoerFlow = true;
                isOptionSelected = true;
              }
            "
            >Dabao</button>

            <button class="btn btn-outline-warning fw-bold btn-lg px-4 shadow-sm animate__animated animate__fadeIn"
            @click="
              () => {
                showDabaoerFlow = false;
                isOptionSelected = true;
              }
            "
            >Delivery</button>
          </div>
        </div>
      </div>
    </div>
        <c-flex justify="center">
          <center>
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
          </center>
        </c-flex>
    <HeroImg />
    <br>
    <Feature />

    <c-button v-show="this.$auth.loggedIn" @click="getToken">
      Get Token
    </c-button>

      <c-box v-show="this.$auth.loggedIn">{{ 'Access token: ' + token }}</c-box>
      <c-box v-show="this.$auth.loggedIn">{{
        'Refresh token: ' + refreshToken
      }}</c-box>
  </div>
</template>

<script>
import Leecher from '@/components/private/leecher/Leecher.vue';
import Dabaoer from '@/components/private/dabaoer/Dabaoer.vue';
import HeroImg from '@/components/common/hero-image.vue';
import Feature from '@/components/common/feature.vue';

export default {
  components: {
    Leecher,
    Dabaoer,
    HeroImg,
    Feature,
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
