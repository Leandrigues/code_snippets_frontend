<template>
  <nav class="nav-container">
    <TheSearch/>
    <div class="sign-buttons-container">
      <v-btn text large class="sign-in-button" color="white">Sign in</v-btn>
      <v-btn depressed large color="#e94560" class="white--text sign-up-button">Sign up</v-btn>
    </div>
  </nav>
</template>

<script>
import TheSearch from './TheSearch'

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
  font-family: 'Roboto Slab', serif;
  @apply flex items-center justify-between justify-around pt-2;
}

.sign-up-button {
  display: none;
}

button.sign-in-button {
  padding: 0 !important;
}

@screen md {
  .nav-container {
    @apply flex bg-navy justify-between items-center mt-2 w-full py-0;
  }

  .nav-section {
    @apply flex h-20 items-center;
  }

  .sign-buttons-container {
    @apply flex items-center justify-between w-56;
  }

  .sign-up-button {
    font-family: 'Roboto Slab', serif;
    display: block;
    @apply outline-none;
  }

  .sign-in-button {
    font-family: 'Roboto Slab', serif;
    @apply cursor-pointer outline-none;
  }
}

</style>