<template>
  <div id="search-container">
      <p id="search-text">Search snippets</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
#search-text {
    margin: 0;
    /* font-family: 'Lato', sans-serif; */
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.95rem;
}

#search-container {
    display: flex;
    align-items: center;
    border: solid 1px lightgrey;
    padding: 0.3rem 0.9rem;
    width: 8rem;
    border-radius: 20px;
}
</style>