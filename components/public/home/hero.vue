<template>
  <c-box>
    <c-flex w="full" h="100vh" backgroundImage="https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/8days-images/12599810-10-gourmet-eateries-that-now-offer-delivery-or-discounted-takeaway-meals.jpg?itok=dwNXCSPS"
    backgroundSize="cover" backgroundPosition="center center">
      <c-stack width="full" justify="center" :px="['16px', '32px']"
      bgGradient="linear(to-r, blackAlpha.600,transparent)">
        <c-stack maxW="2x1" align="center" spacing="6">
          <c-text color="white" fontWeight="700" lineHeight="1.2"
          :fontSize="['24px', '32px']">Hello username</c-text>
          <c-stack direction="row">
            <c-button bg="blue.400" round="full" color="white">
              Show Me More
            </c-button>
            <c-button bg="red.300" round="full" color="white">
              Show Me More
            </c-button>
          </c-stack>
        </c-stack>
      </c-stack>
    </c-flex>
  </c-box>
</template>

<script>
export default {
  name: 'Home',
};
</script>
