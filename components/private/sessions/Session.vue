<template>
  <!-- <c-grid-item
    display="flex"
    justify-content="center"
    align-items="center"
    col-span="2"
    bg="blue.50"
    cursor="pointer"
  >
    <c-box @click="$emit('selectSession', session), $emit('getDabaoer', session.dabaoer)"
    align="center" bg="blue.50">
      <c-text fontSize="3xl">{{ trimmedId }}</c-text>
      <c-text fontSize="xl">{{ session.food }}</c-text>
      <c-text fontSize="md">Host: {{ session.dabaoer }}</c-text>
    </c-box>
  </c-grid-item> -->
  <div>
    <li class="clearfix" @click="$emit('selectSession', session)">
      <img :src="randomImage" alt="avatar" />
      <div class="about">
        <div class="name">Session {{ trimmedId }}</div>
        <div class="status">
          <i class="fa fa-circle online"></i> {{ session.food }}
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
