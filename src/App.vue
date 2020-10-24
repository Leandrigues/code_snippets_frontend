<template>
  <v-app id="app">
    <div class="content">
      <SideBar />
      <Main />
    </div>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import Main from "@/components/Main.vue";

export default {
  name: "App",
  components: {
    SideBar,
    Main,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
}

html,
body {
  background-color: #1a1a2e;
  @apply m-0 p-0 h-full w-full;
}

#app {
  margin: 0;
  padding: 0;
  background-color: #1a1a2e;
  @apply h-full w-full;
}

.content {
  @apply flex h-full;
}
</style>
