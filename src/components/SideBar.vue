<template>
  <section class="side-bar-container">
    <ul class="categories">
        <a @click="selected = i" href="#" class="categorie" v-for="(categorie, i) in  categories" :key="categorie" :class="{'selected': selected == i,   'non-selected': selected != i}">
          {{ categorie }}
        </a>
    </ul>
  </section>
</template>

<script>

export default {
  data() {
    return {
      categories: [
        "Algorithms & Datastructure",
        "Front-end",
        "DB Schemas",
        "Interview Problems",
        "Git ignore",
        "Regex"
      ],
      selected: 0
    }
  },
  components: {
  }
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap'); */

.side-bar-container {
  min-width: 23rem;
  width: 24%;
  @apply h-full border-r px-10 py-10;
}

.categories {
  height: 70%;
  font-family: 'Noto Sans', sans-serif;  
  @apply flex flex-col justify-between;
}

.categorie {
  color: #0D3B66;
  background-color: transparent;
  transition: background-color .3s;
  @apply py-3 pl-5 rounded-full;
}

.selected.categorie {
  background-color: #0D3B66;
  color: white;
  @apply py-3 pl-5 rounded-full;
}

.non-selected {
  margin-left: 9px;
}
</style>