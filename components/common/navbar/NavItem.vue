<template>
  <c-box as="li" mr="8">
    <c-link
      as="nuxt-link"
      :to="link"
      color="gray.500"
      :_hover="{ color: 'yellow.400' }"
    >
      {{ formatText }}
    </c-link>
  </c-box>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'NavItem',
  props: {
    text: String,
    link: String,
  },
  computed: {
    formatText() {
      const formattedText = _.capitalize(this.text);
      return formattedText;
    },
  },
};
</script>
