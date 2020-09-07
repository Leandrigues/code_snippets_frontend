<template>
  <nav class="nav-container">
    <div class="nav-section">
      <div class="logo">CodeSnippets</div>
    </div>
    <div class="sign-buttons-container">
      <v-btn text large class="sign-in-button">Sign in</v-btn>
      <v-btn depressed large color="#F87060" class="white--text sign-up-button">Sign up</v-btn>
    </div>
  </nav>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&display=swap");

.nav-container {
  @apply flex justify-between items-center border-b w-full px-16;
}

.nav-section {
  @apply flex w-full h-20 items-center;
}

.logo {
  font-family: 'Roboto Slab', serif;
  @apply text-xl w-32;
}

.sign-buttons-container {
  @apply flex items-center justify-between w-56;
}

.sign-up-button {
  font-family: 'Roboto Slab', serif;
  outline: none;
}

.sign-up-button:hover {
  @apply bg-mainNavyBlue;
}

.sign-in-button {
  font-family: 'Roboto Slab', serif;
  outline: none;

  @apply cursor-pointer;
}
</style>