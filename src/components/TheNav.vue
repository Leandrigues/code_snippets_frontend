<template>
  <nav id="nav-container">
    <div id="logo">CodeSnippets</div>
    <TheSearch/>
    <div id="sign-buttons-container">
      <div id="sign-in-button">Sign in</div>
      <div id="sign-up-button">Sign up</div>
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

#nav-container {
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  border-bottom: solid 1px rgb(231, 231, 231);
  height: 4rem;
  width: 100%;
}

#logo {
  flex-grow: 10;
  font-family: 'Roboto Slab', serif;
}

#sign-buttons-container {
  display: flex;
  align-items: center;
  width: 10rem;
}

#sign-up-button {
  font-family: 'Roboto Slab', serif;
  background-color: #f1a9e2;
  padding: 0.7rem;
  color: white;
  border-radius: 4px;
}

#sign-in-button {
  font-family: 'Roboto Slab', serif;
}

</style>