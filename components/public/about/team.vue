<template>
  <c-box py="5" px="32" my="8">
    <c-box textAlign="center">
      <c-heading  fontWeight="bolder">
        Our team
      </c-heading>
      <c-text fontWeight="normnal" mb="16" fontSize= "24px">
        Dedicated to give quality experience
      </c-text>
    </c-box>
    <c-simple-grid :columns="['1','2','4']" align="center">
      <c-box pt="5">
        <c-heading as="h5">Sean Jin</c-heading>
        <c-image rounded="full" h="150px" w="150px" src="https://bit.ly/chakra-jonathan-bakebwa" alt="Jonathan Bakebwa" />
      </c-box>
      <c-box pt="5">
        <c-heading as="h5" >Min Jay</c-heading>
        <c-image rounded="full" h="150px" w="150px" src="https://bit.ly/chakra-jonathan-bakebwa" alt="Jonathan Bakebwa" />
      </c-box>
      <c-box pt="5">
        <c-heading as="h5" >Wei Ping</c-heading>
        <c-image rounded="full" h="150px" w="150px" src="https://bit.ly/chakra-jonathan-bakebwa" alt="Jonathan Bakebwa" />
      </c-box>
      <c-box pt="5">
        <c-heading as="h5" >Andy</c-heading>
        <c-image rounded="full" h="150px" w="150px" src="https://bit.ly/chakra-jonathan-bakebwa" alt="Jonathan Bakebwa" />
      </c-box>
</c-simple-grid>
  </c-box>
</template>

<script>
export default {
  name: 'team',
};
</script>
