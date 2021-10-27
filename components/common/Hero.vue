<template>
  <c-box my="32">
    <c-flex justify="center">
      <c-form-control is-required>
        <c-form-label for="fname">Address</c-form-label>
        <c-input
          type="number"
          v-model="field"
          placeholder="Enter postal code"
          size="lg"
          mb="3"
          v-on:input="callField(field)"
        />
      </c-form-control>
    </c-flex>

    <c-simple-grid
      v-if="field.length == 6"
      min-child-width="400px"
      spacing-x="5"
      spacing-y="10"
      margin="5"
      text-align="center"
    >

      <c-box maxW="sm" border-width="1px" rounded="lg"
      v-for="(leech, i) of leecher"
      v-bind:key="i">
        <c-image
          :src="require('@/assets/Image1.jpg')"
          :alt="property.imageAlt"
        />
        <c-button v-on:click="callSession(leech.key)">
          <c-link href="sessions">Join Session</c-link>
        </c-button>
        <c-text>{{leech.key}}</c-text>
      </c-box>
    </c-simple-grid>
  </c-box>
</template>

<script>
export default {
  name: 'Hero',
  props: ['leecher'],
  data() {
    return {
      user: [],
      field: '',
      property: {
        imageUrl: '~/assets/Image1.jpg',
      },
    };
  },
  methods: {
    callField(x) {
      if (x.length === 6) {
        this.$emit('getPostal', x);
      }
    },
    callSession(x) {
      this.$emit('joinSession', x);
    },
  },
};
</script>
