<template>
  <c-box>
    <input
      type="number"
      v-model="field[0]"
      placeholder="Enter postal code"
      style="width: 230px"
      class="
        form-control form-control-lg
        mb-3
        animate__animated animate__fadeInLeft
      "
    />
    <input
      type="text"
      v-model="field[1]"
      placeholder="Enter food"
      style="width: 230px"
      class="
        form-control form-control-lg
        mb-3
        animate__animated animate__fadeInLeft
      "
    />
    <div class="md-form">
      <date-picker
        style="width: 230px"
        class="animate__animated animate__fadeInLeft"
        v-model="field[2]"
        type="time"
        placeholder="Enter departure time"
        :use12h="true"
        :show-second="false"
        input-class="form-control form-control-lg mb-3"
      />
    </div>
    <session :field="field" />
  </c-box>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import Session from './Session.vue';
import 'vue2-datepicker/index.css';

export default {
  name: 'Dabaoer',
  components: { Session, DatePicker },
  data() {
    return {
      field: ['', '', ''],
    };
  },
};
</script>
