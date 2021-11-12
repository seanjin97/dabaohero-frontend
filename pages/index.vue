<template>
  <div>
    <div id="intro" class="bg-image shadow">
    <div class="container-fluid bg-grad">
      <div class="px-5 pt-5 text-center min-vh-75">
        <div class="d-inline" style="max-height: 30vh">
          <img
            src="./img/DabaoHero.png"
            class="img-fluid mx-auto mt-3 mb-2 animate__animated animate__fadeInDown"
            width="500"
            height="300"
          />
        </div>

        <br />
        <div class="mx-auto pb-1">
          <div class="lead fs-5 fw-normal mx-auto mb-6" style="max-width: 600px">
            DabaoHero aims to promote hawker businesses in Singapore through
            <strong>community-driven</strong> food deliveries, encouraging more
            takeaways from our hawkers without involving them in the process.
          </div>
          <br />
          <div
            v-if="!isOptionSelected"
            class="d-grid gap-2 d-sm-flex justify-content-sm-center"
          >
            <button
              type="button"
              class="
                btn-dabao
                fw-bold
                btn-lg
                px-4
                me-sm-3
                shadow
                animate__animated animate__zoomIn
              "
              @click="login"
            >
              Dabao
            </button>
            <button
              type="button"
              class="
                btn-dabao
                fw-bold
                btn-lg
                px-4
                shadow
                animate__animated animate__zoomIn
              "
              @click="login"
            >
              Order
            </button>
          </div>
          </div>
          <div class="d-none d-sm-block mt-5">
          <HeroImg />
          </div>
        </div>
      </div>
    </div>
    <Features />

    <Partners />

    <a href="#" class="scroll-top">
        <i class="fas fa-angle-up"></i>
    </a>

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

import HeroImg from '@/components/common/hero-image.vue';
import Features from '@/components/common/features.vue';
import Partners from '@/components/common/partners.vue';

export default {
  layout: 'public',
  auth: 'guest',
  components: {
    HeroImg,
    Features,
    Partners,
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
    login() {
      this.$auth.loginWith('auth0');
    },
  },
  async fetch() {
    this.username = await this.$auth.$storage.getUniversal('username');
  },
};
</script>
