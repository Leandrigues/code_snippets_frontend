<template>
  <nav class="nav-container">
    <div class="nav-section">
      <div class="logo">CodeSnippets</div>
    </div>
    <div class="sign-buttons-container">
      <v-btn text large class="sign-in-button" color="white">Sign in</v-btn>
      <v-btn depressed large color="#e94560" class="white--text sign-up-button">Sign up</v-btn>
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
  font-family: 'Roboto Slab', serif;
  @apply flex items-center justify-around py-3;
}

.logo {
  font-family: 'Roboto Slab', serif;
  @apply text-xl font-bold w-32 text-pink;
}

@screen md {
  .nav-container {
    @apply flex bg-navy justify-between items-center  w-full px-16 py-0;
  }

  .nav-section {
    @apply flex w-full h-20 items-center;
  }

  .sign-buttons-container {
    @apply flex items-center justify-between w-56;
  }

  .sign-up-button {
    font-family: 'Roboto Slab', serif;
    @apply outline-none;
  }

  .sign-in-button {
    font-family: 'Roboto Slab', serif;
    @apply cursor-pointer outline-none;
  }
}

</style>