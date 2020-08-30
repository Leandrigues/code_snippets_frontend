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
  @apply m-0 p-0;
}

#app {
    
}
</style>
