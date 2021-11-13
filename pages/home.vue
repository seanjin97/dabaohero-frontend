<template>
  <div>
    <div id="intro" class="bg-image shadow">
      <div class="container-fluid bg-grad">
        <div class="px-5 pt-5 text-center min-vh-75">
          <div class="d-inline" style="max-height: 30vh">
            <img
              src="./img/DabaoHero.png"
              class="
                img-fluid
                mx-auto
                mt-3
                mb-2
                animate__animated animate__fadeInDown
              "
              width="500"
              height="300"
            />
          </div>

          <br />
          <div class="mx-auto pb-1">
            <div
              class="lead fs-5 fw-normal mx-auto mb-6"
              style="max-width: 600px"
            >
              DabaoHero aims to promote hawker businesses in Singapore through
              <strong>community-driven</strong> food deliveries, encouraging
              more takeaways from our hawkers without involving them in the
              process.
            </div>
            <br />
            <h1
              class="fs-5 fw-light mb-4 animate__animated animate__fadeInLeft"
            >
              Welcome back, {{ username }}.
            </h1>
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
                type="button"
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
                <c-box pos="relative" right="150px" top="41px" w="4" mr="8">
                  <c-button
                    @click="
                      () => {
                        isOptionSelected = false;
                        searchedSessions = [];
                        searchInProgress = false;
                      }
                    "
                    mr="1"
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
                  :searchInProgress="searchInProgress"
                  :noSessionsFound="noSessionsFound"
                />
              </center>
            </c-flex>
          </div>
          <div class="d-none d-sm-block">
            <HeroImg />
          </div>
        </div>
      </div>
    </div>
    <Features />
    <FAQ />
    <Partners />

    <a href="#" class="scroll-top d-none d-lg-flex">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
import Leecher from '@/components/private/leecher/Leecher.vue';
import Dabaoer from '@/components/private/dabaoer/Dabaoer.vue';
import HeroImg from '@/components/common/hero-image.vue';
import Features from '@/components/common/features.vue';
import FAQ from '@/components/common/faq.vue';
import Partners from '@/components/common/partners.vue';

export default {
  components: {
    Leecher,
    Dabaoer,
    HeroImg,
    Features,
    FAQ,
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
      searchInProgress: false,
      noSessionsFound: false,
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
      this.searchInProgress = true;
      const url = `${process.env.BACKEND_URL}/session/search?username=${this.username}&postal_code=${this.field}`;
      const token = await this.$auth.strategy.token.get();
      const data = await this.$axios.$get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data) {
        this.searchInProgress = false;
        this.searchedSessions = data;
        if (data.length === 0) {
          this.noSessionsFound = true;
        } else {
          this.noSessionsFound = false;
        }
      }
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
          session_code: this.key,
          username: this.username,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
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
          postal_code: this.field[0],
          food: this.field[1],
          departure_time: this.field[2],
          username: this.username,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      console.log(data);
    },
  },
  async fetch() {
    this.username = this.$store.state.username;
  },
};
</script>
