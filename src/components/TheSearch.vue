<template>
  <div class="search-container">
    <transition name="fade">
      <form class="search-form" action="">
        <input class="search-input" type="text" @focus="searchIsOnFocus = !searchIsOnFocus" placeholder="Search a snippet">
        <svg class="search-icon" fill="rgb(200, 200, 200)" enable-background="new 0 0 515.558 515.558" height="30" viewBox="0 0 515.558 515.558" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/></svg>
      </form>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchIcon: require("../assets/search.svg"),
      searchOnFocusIcon: require("../assets/search-onfocus.svg"),
      searchIsOnFocus: false,
      inputActive: false,
    }
  },
  computed: {
    pickSearchIcon: function() {
      return this.searchIsOnFocus ? this.searchOnFocusIcon : this.searchIcon  
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');

.search-container {
  /* width: calc(33% - 1rem); */
  width: 50%;
  @apply my-5;
}

.search-form {
  @apply w-full flex items-center;
}

.search-icon {
  fill: rgb(233,69,96);
  @apply h-4 absolute;
}

.search-input {
  border-bottom: solid 1px rgb(255, 255, 255);
  font-family: 'Source Sans Pro', sans-serif;
  transition: border 0.3s;
  @apply flex items-center m-0 text-lg text-white pl-8 py-1 w-full h-12;
}

.search-input:focus {
  outline:none;
  border-bottom: solid 1px #e94560;
}

input:focus::placeholder {
  @apply italic text-white;
}

input::placeholder {
  @apply italic text-white;
}

@media (max-width: 1630px) {
  .search-container {
    width: calc(50% - 1rem);
  }
}

@media (max-width: 1295px) {
  .search-container {
    width: 100%;
  }
}
</style>