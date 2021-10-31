<!-- eslint-disable vue/no-mutating-props -->
<template>
  <!-- eslint-disable max-len -->

  <div class="container-fluid ">
    <div class="px-5 pt-5 my-1 text-center min-vh-75 bg-gradient">
      <h1 class="display-4 fw-bold">Welcome, {{username}}.</h1> <br>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">DabaoHero aims to promote hawker businesses in Singapore by encouraging more takeaways, without involving the hawkers themselves.</p>
        <div v-if="!isOptionSelected" class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" class="btn btn-warning fw-bold btn-lg px-4 me-sm-3 shadow-sm" @click="
            () => {
              showDabaoerFlow = true;
              isOptionSelected = true;
            }
          "
          >Dabao</button>

          <button class="btn btn-outline-warning fw-bold btn-lg px-4 shadow-sm"
          @click="
            () => {
              showDabaoerFlow = false;
              isOptionSelected = true;
            }
          "
          >Delivery</button>
      </div>
      </div>
        <!-- <div class="mx-auto w-50">
          <div>
            <c-box pos="absolute" left="500px" justify="center">
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
          </div>
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
        </div> -->
      <!-- <c-box my="">
        <c-flex justify="center">
          <Center>
          <c-box justify="center" pos="relative" left="10px">
            <c-button
              @click="
                () => {
                  isOptionSelected = false;
                  searchedSessions = [];
                }
              "
              v-show="isOptionSelected"
            >
              <i class="fas fa-angle-left"></i>
            </c-button>
            <c-box v-show="isOptionSelected"><br></c-box>
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
          </Center>
        </c-flex>
      </c-box> -->
      <div class="overflow-hidden" style="max-height: 30vh;">
        <div class="container px-5">
          <img src="./main.jpg" class="img-fluid border rounded-3 shadow-lg mx-auto mb-4" alt="Dabao image" width="900" height="600" loading="lazy">
        </div>
      </div>

    </div>
  </div>

</template>

<script>
// import Leecher from '@/components/private/leecher/Leecher.vue';
// import Dabaoer from '@/components/private/dabaoer/Dabaoer.vue';

export default {
  // data() {
  //   return {
  // username: '',
  //   };
  // },
  components: {
    // Leecher,
    // Dabaoer,
  },
  name: 'Hero',
  props: ['username'],

  // methods: {
  //   async fetch() {
  //     this.username = await this.$auth.$storage.getUniversal('username');
  //     console.log(this.username);
  //   },
  // },

};
</script>
