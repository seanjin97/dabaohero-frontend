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
  name: 'aboutapp',
  data() {
    return {
      title: 'About Our App',
      content: 'DabaoHero is a joined effort by multiple students to help promote hawker businesses in Singapore by encouraging more people to order takeaways from them, without involving any fees or technology for the hawkers themselves. This is done by providing a convenient third-party platform that allows anyone to either “take-away” (known as Leecher) through someone else or perform errands (known as Dabao-er) for the people who opt for the “take-away” option.',
    };
  },
};
</script>
