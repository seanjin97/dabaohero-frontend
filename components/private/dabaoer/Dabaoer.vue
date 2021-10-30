<template>
  <c-box>
    <c-form-control is-required>
      <c-input
        type="number"
        v-model="field[0]"
        placeholder="Enter postal code"
        size="lg"
        mb="3"
      />
      <c-input
        type="text"
        v-model="field[1]"
        placeholder="Enter food"
        size="lg"
        mb="3"
      />
      <c-input
        type="time"
        v-model="field[2]"
        placeholder="Enter departure time"
        size="lg"
        mb="3"
      />
      <session
        :field = "field"
      />
    </c-form-control>
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
