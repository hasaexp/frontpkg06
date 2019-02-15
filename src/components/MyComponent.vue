<template>
  <div>
    <p class="test">test!</p>
    <p @mouseover="clickFunc">{{ name }}</p>
  </div>
</template>

<style scoped>
  p {
    color: #f00;
  }
</style>

<script>
  export default {
    data: () => {
      return {
        name: 'Satoshi',
      };
    },
    methods: {
      clickFunc: () => console.log('click1'),
    },
  }  
</script>