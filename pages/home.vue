<!-- eslint-disable max-len -->
<template>
  <div>
    <div class="container-fluid bg-grad">
      <div class="px-5 pt-5 my-1 text-center min-vh-75">
        <h1 class="display-4 fw-bold animate__animated animate__fadeInLeft">
          Welcome to DabaoHero.
        </h1>
        <br />
        <div class="mx-auto">
          <p class="lead fw-normal text-break mb-6">
            DabaoHero aims to promote hawker businesses in Singapore through
            <strong>community-driven</strong> food deliveries, encouraging more
            takeaways for our hawkers without involving them in the process.
          </p>
          <br /><br />
          <h2 class="fs-3 fw-normal mb-4">I want to..</h2>
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
              @click="
                () => {
                  showDabaoerFlow = true;
                  isOptionSelected = true;
                }
              "
            >
              Dabao
            </button>
            <button
              class="
                btn-dabao
                fw-bold
                btn-lg
                px-4
                shadow
                animate__animated animate__zoomIn
              "
              @click="
                () => {
                  showDabaoerFlow = false;
                  isOptionSelected = true;
                }
              "
            >
              Order
            </button>
          </div>

          <c-flex justify="center" mb="50px">
            <center>
              <c-box pos="relative" right="150px" top="41px">
                <c-button
                  @click="
                    () => {
                      isOptionSelected = false;
                      searchedSessions = [];
                    }
                  "
                  mr="10"
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
        </div>
      </div>
    </div>
    <br />
    <Feature />
    <br />
    <Partners />

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
import Partners from '@/components/common/partners.vue';

export default {
  components: {
    Leecher,
    Dabaoer,
    HeroImg,
    Feature,
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
      console.log(data);
    },

    getKey(x) {
      this.key = x;
      this.fetchSession();
    },
    async fetchSession() {
      const url = `${process.env.BACKEND_URL}/session/join`;
      const token = await this.$auth.strategy.token.get();
      const data = await this.$axios.$post(
        url,
        {
          headers: { Authorisation: token },
        },
        {
          session_code: this.key,
          username: this.username,
        },
      );
      console.log(data);
    },
    async createSession() {
      const url = `${process.env.BACKEND_URL}/session/create`;
      const token = await this.$auth.strategy.token.get();
      const data = await this.$axios.$post(
        url,
        {
          headers: { Authorisation: token },
        },
        {
          postal_code: this.field[0],
          food: this.field[1],
          departure_time: this.field[2],
          username: this.username,
        },
      );
      console.log(data);
    },
  },
  async fetch() {
    this.username = await this.$auth.$storage.getUniversal('username');
  },
};
</script>
