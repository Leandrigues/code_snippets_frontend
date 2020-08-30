<template>
  <input class="search-container" type="text" placeholder="Search snippet">
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');

.search-container {
  border: solid 1px lightgrey;
  font-family: 'Source Sans Pro', sans-serif;
  @apply m-0 text-sm flex items-center px-2 py-1 w-32 rounded-full;
}

.search-container:focus {
  outline:none;

}

input:focus::placeholder {
  color: transparent;
}
</style>