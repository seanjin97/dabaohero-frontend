<template>
  <div class="sessionList">
    <li
      class="clearfix"
      @click="
        $emit('selectSession', session), $emit('getDabaoer', session.dabaoer)
      "
    >
      <img :src="randomImage" alt="avatar" aria-label="profile-pic" />
      <div class="about">
        <div class="name">Session {{ trimmedId }}</div>
        <div class="status">
          <i v-if="session.is_active" class="fa fa-circle online"></i>
          <i v-else class="fa fa-circle offline"></i>
          {{ session.food }}
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Session',
  props: {
    session: Object,
  },
  computed: {
    trimmedId() {
      if (this.session) {
        return this.session.key.slice(0, 5);
      }
      return null;
    },
    randomImage() {
      const num = Math.floor(Math.random() * 8 + 1);
      return `https://bootdey.com/img/Content/avatar/avatar${num}.png`;
    },
  },
};
</script>

<style>
@media (max-width: 767px) {
  .sessionList img {
    width: 45px;
    height: 35px;
  }
  .name {
    display: none;
  }
  .status {
    display: none;
  }
}
</style>
