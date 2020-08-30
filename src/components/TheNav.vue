<template>
  <nav class="nav-container">
    <div class="logo">CodeSnippets</div>
    <TheSearch/>
    <div class="sign-buttons-container">
      <div class="sign-in-button">Sign in</div>
      <div class="sign-up-button">Sign up</div>
    </div>
  </nav>
</template>

<script>
import TheSearch from "@/components/TheSearch"

export default {
  components: {
    TheSearch
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&display=swap");

.nav-container {
  @apply flex justify-between items-center border-b h-20 w-full px-6;
}

.logo {
  font-family: 'Roboto Slab', serif;
  @apply text-lg;
}

.sign-buttons-container {
  @apply flex items-center justify-between w-40;
}

.sign-up-button {
  font-family: 'Roboto Slab', serif;
  background-color: #2a5890;
  transition: background-color 0.4s;
  @apply py-3 px-4 cursor-pointer text-white rounded;
}

.sign-up-button:hover {
  background-color:#3a6ead;
}

.sign-in-button {
  font-family: 'Roboto Slab', serif;
}

</style>