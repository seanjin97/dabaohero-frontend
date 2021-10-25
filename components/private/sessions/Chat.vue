<template>
  <c-box>
    <c-flex justify='center'>
      <c-grid
        h="600px"
        w="1000px"
        template-rows="repeat(4, 2fr)"
        template-columns="repeat(7, 1fr)"
        gap="3"
        margin-top="10">
        <c-grid-item  row-span="4" col-span="5" bg="blue.300">
            <c-grid-item v-if="layout==='msg'">
              <c-grid-item bg="grey" height="10" padding-left="2" padding-top="2">
                  <c-text color="white">Session {{property.num}}</c-text>
              </c-grid-item>
              <c-grid-item margin-top="480" padding="15">
                <c-input placeholder="Enter message" size="sm"/>
              </c-grid-item>
            </c-grid-item>

            <c-grid-item v-else color="white" text-align="center" my="265">
                <h1>Select a chat to get started</h1>
            </c-grid-item>
        </c-grid-item >
        <c-grid-item
        display="flex"
        justify-content="center"
        align-items="center"
        col-span="2"
        bg="blue.300">
            <c-button v-on:click="layout='msg'" variant-color="blue.300">
                Session
            </c-button>
        </c-grid-item>
        <c-grid-item
        display="flex"
        justify-content="center"
        align-items="center"
        col-span="2"
        bg="blue.300">
            <c-button v-on:click="layout='msg'" variant-color="blue.300">
                Session
            </c-button>
        </c-grid-item>
        <c-grid-item
        display="flex"
        justify-content="center"
        align-items="center"
        col-span="2"
        bg="blue.300">
            <c-button v-on:click="layout='msg'" variant-color="blue.300">
                Session
            </c-button>
        </c-grid-item>
        <c-grid-item
        display="flex"
        justify-content="center"
        align-items="center"
        col-span="2"
        bg="blue.300">
            <c-button v-on:click="layout='msg'" variant-color="blue.300">
                Session
            </c-button>
        </c-grid-item>
    </c-grid>
    </c-flex>
  </c-box>
</template>

<script>
export default {
  data() {
    return {
      property: {
        num: 1,
      },
      layout: '',
    };
  },
};
</script>
