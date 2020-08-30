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
  @apply flex items-center border-b h-16 w-full px-6;
}

.logo {
  flex-grow: 1;
  font-family: 'Roboto Slab', serif;
}

.sign-buttons-container {
  @apply flex items-center w-40;
}

.sign-up-button {
  font-family: 'Roboto Slab', serif;
  background-color: #f1a9e2;
  @apply p-3 text-white rounded;
}

.sign-in-button {
  font-family: 'Roboto Slab', serif;
}

</style>