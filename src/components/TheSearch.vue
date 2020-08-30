<template>
  <div class="search-container">
    <transition name="fade">
      <form class="search-form" action="">
        <input class="search-input" type="text" placeholder="Search a snippet">
        <img class="search-icon" src="../assets/search.svg" alt="">
      </form>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputActive: false
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');

.search-container {
  @apply w-1/3 ml-5;
}

.search-form {
  @apply flex items-center;
}

.search-icon {
  position: absolute;
  @apply h-4 ml-3;
}

.search-input {
  border: solid 1px lightgrey;
  font-family: 'Source Sans Pro', sans-serif;
  transition: border 0.3s;
  @apply m-0 text-lg flex items-center pl-8 py-1 w-64 rounded-md;
}

.search-input:focus {
  outline:none;
  border: solid 1px #3a6ead;
}

input:focus::placeholder {
  font-style: italic;
}

input::placeholder {
  font-style: italic;
}
</style>