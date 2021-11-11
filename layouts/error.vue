<template>
  <div class="container m-3">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <br />
    <div>
      <p class="text-primary"><NuxtLink to="/">Click here</NuxtLink></p>
      <p>to return to Home page</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
};
</script>
