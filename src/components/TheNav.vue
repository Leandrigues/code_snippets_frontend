<template>
  <nav class="nav-container">
    <div class="nav-section">
      <div class="logo">CodeSnippets</div>
    </div>
    <div class="sign-buttons-container">
      <div class="sign-in-button">Sign in</div>
      <div class="sign-up-button">Sign up</div>
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
  @apply flex justify-between items-center border-b h-20 w-full px-16;
}

.nav-section {
  @apply flex w-full items-center;
}

.logo {
  font-family: 'Roboto Slab', serif;
  @apply text-lg w-32;
}

.sign-buttons-container {
  @apply flex items-center justify-around w-48;
}

.sign-up-button {
  font-family: 'Roboto Slab', serif;
  transition: background-color 0.4s;
  @apply py-3 px-4 cursor-pointer text-white rounded bg-mainNavyBlue;
  background-color: #ed7b84;
}

.sign-up-button:hover {
  @apply bg-mainNavyBlue;
}

.sign-in-button {
  font-family: 'Roboto Slab', serif;
  @apply cursor-pointer;
}
</style>