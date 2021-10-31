<template>
  <!-- eslint-disable max-len -->
  <div class="container-fluid">

    <div class="px-4 pt-5 my-5 text-center border-bottom">
      <h1 class="display-4 fw-bold">Welcome to DabaoHero.</h1> <br>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">We aim to promote hawker businesses in Singapore by encouraging more takeaways, without involving the hawkers themselves.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" class="btn btn-warning fw-bold btn-lg px-4 me-sm-3">Dabao</button>
          <button type="button" class="btn btn-outline-warning fw-bold btn-lg px-4">Delivery</button>
        </div>
      </div>
      <div class="overflow-hidden" style="max-height: 30vh;">
        <div class="container px-5">
          <img src="#./main.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Dabao image" width="700" height="500" loading="lazy">
        </div>
      </div>
    </div>
    <div class="b-example-divider"></div>
  </div>

</template>

<script>
export default {
  name: 'Hero',
  props: ['username'],
};
</script>
