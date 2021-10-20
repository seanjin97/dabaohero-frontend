<template>
  <c-box px="128" pt="32">
    <c-stack spacing="4" as="container" maxW="3x1" textAlign="center">
      <c-heading fontSize="48px">{{title}}</c-heading>
      <c-text color="gray" fontSize="24px">{{content}}</c-text>
    </c-stack>
  </c-box>
</template>

<script>
export default {
  name: 'appworks',
  data() {
    return {
      title: 'How our app works',
      content: 'For the Leecher, they will have to input their postal code so that DabaoHero can match them with the Dabao-er who lives nearby and wants to buy food from the same location. Each Leecher is entitled to join multiple sessions if they want to buy food from a few different places. However, being a Leecher would mean that they are willing to pay a small fee for the Dabao-er to help deliver their food.',
    };
  },
};
</script>
