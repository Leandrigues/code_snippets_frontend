<template>
  <transition name="fade">
    <input class="search-container" type="text" placeholder="Search a snippet">
  </transition>
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
  border: solid 1px lightgrey;
  font-family: 'Source Sans Pro', sans-serif;
  transition: border 0.4s;
  @apply m-0 text-lg italic flex items-center px-4 py-1 w-1/4 rounded-full;
}

.search-container:focus {
  outline:none;
  border: solid 1px #3a6ead;
}

input:focus::placeholder {
  color: transparent;
}
</style>