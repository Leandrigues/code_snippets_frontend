<template>
  <div id="app">
    <TheNav/>  
    <div class="content">
      <SideBar/>
      <Main/>
    </div>
  </div>
</template>

<script>
import TheNav from "@/components/TheNav.vue"
import SideBar from "@/components/SideBar.vue"
import Main from "@/components/Main.vue"

export default {
  name: 'App',
  components: {
    TheNav,
    SideBar,
    Main
  }
}
</script>
<style>
html, body {
  @apply m-0 p-0 h-full;
}

#app {
  @apply h-full;
}

.content {
  @apply flex h-full
}
</style>
