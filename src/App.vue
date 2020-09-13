<template>
  <v-app id="app">
    <TheNav/>  
    <div class="content">
      <SideBar/>
      <Main/>
    </div>
  </v-app>
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
* {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
}

html, body {
  @apply m-0 p-0 h-full w-full;
}

#app {
  margin: 0;
  padding: 0;
  @apply h-full w-full;
}

.content {
  @apply flex h-full;
}
</style>
