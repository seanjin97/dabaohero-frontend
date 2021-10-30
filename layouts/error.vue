<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <br>
    <p class="text-primary"> Click  <NuxtLink to="/"> here</NuxtLink> to return to Home page</p>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
};
</script>
