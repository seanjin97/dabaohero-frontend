<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <input
            type="number"
            v-model="field"
            placeholder="Enter postal code"
            style="width: 230px"
            @keyup.enter="$emit('getPostal', field)"
            class="form-control form-control-lg mb-3"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col">
          <c-spinner
            v-if="searchInProgress"
            m="4"
            thickness="4px"
            speed="0.65s"
            color="vue.500"
            size="xl"
          />
          <button
            v-else
            type="button"
            class="m-3 btn-dabao fw-bold btn-lg"
            @click="$emit('getPostal', field)"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div
          v-if="searchedSessions.length > 0"
          class="card-group justify-content-center"
        >
          <session
            v-for="session in searchedSessions"
            :key="session.key"
            :session="session"
            @joinSession="$emit('joinSession', $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Session from './Session.vue';

export default {
  name: 'Leecher',
  props: { searchedSessions: Array, searchInProgress: Boolean },
  components: { Session },
  data() {
    return {
      user: [],
      field: '',
    };
  },
};
</script>
