<template>
  <c-box>
      <input
        type="number"
        v-model="field[0]"
        placeholder="Enter postal code"
        style="width: 230px;"
        class="form-control form-control-lg mb-3"
      />
      <input
        type="text"
        v-model="field[1]"
        placeholder="Enter food"
        style="width: 230px;"
        class="form-control form-control-lg mb-3"
      />
      <div class="md-form">
        <input type="time" v-model="field[2]"
        placeholder="Enter departure time"
        style="width: 230px;"
        class="form-control form-control-lg mb-3">
      </div>
      <session
        :field = "field"
      />
  </c-box>
</template>

<script>
import Session from './Session.vue';

export default {
  name: 'Dabaoer',
  components: { Session },
  data() {
    return {
      field: ['', '', ''],
    };
  },
};
</script>
