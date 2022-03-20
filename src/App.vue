<template>
  <div id="app">
    <Card />
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Card,
  },
};
</script>
<style>
/* Global css */
html{
  background-color: #D3E9FC;
  
}
/* Scroll Bar Design */
body::-webkit-scrollbar {
  width: 0.6rem;
}

body::-webkit-scrollbar-track {
  background: none;
}

body::-webkit-scrollbar-thumb {
  background-color: #48AC98;
  border-radius: 0.5rem;
}
</style>
