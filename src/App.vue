<template>
  <div id="app">
    <TheNav/>  
  </div>
</template>

<script>
import TheNav from "@/components/TheNav.vue"

export default {
  name: 'App',
  components: {
    TheNav,
  }
}
</script>
<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  
}
</style>
