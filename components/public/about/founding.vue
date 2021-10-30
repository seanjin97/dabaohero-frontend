<template>
  <c-box py="32">
    <c-simple-grid :columns="['1','2']" align="center">
      <c-box>
        <c-image :src="require('@/components/public/about/img/founders.jpg')"
        mb="['64','lg']"/>
      </c-box>
      <c-box>
        <c-heading as="h2" fontWeight="bolder" pt="5">
          Our founders
        </c-heading>
        <c-text color="gray" fontSize="24px" px="16">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Sunt, maiores odit libero perspiciatis debitis, optio quam
          dolor fugit id quia, neque praesentium. Quisquam neque
          suscipit in voluptate. Iste, aperiam illo.
        </c-text>
      </c-box>
    </c-simple-grid>
  </c-box>
</template>

<script>
export default {
  name: 'founding',
};
</script>
