<template>
  <section class="side-bar-container">
    <ul class="categories">
        <a @click="selected = i" href="#" class="categorie" v-for="(categorie, i) in  categories" :key="categorie.name" :class="{'selected': selected == i,   'non-selected': selected != i}">
          <img :src="getIcon(categorie, i)" alt="">
          {{ categorie.name }}
        </a>
    </ul>
  </section>
</template>

<script>

export default {
  data() {
    return {
      categories: [
        {
          name: "Algorithms",
          icon: "algorithm"
        },
        {
          name: "Database",
          icon: "database"
        },
        {
          name: "Data Structures",
          icon: "structure"
        },
        {
          name: "Front-end",
          icon: "front"
        },
        {
          name: "Git ignore",
          icon: "git"
        },
        {
          name: "Interview",
          icon: "interview"
        },
        {
          name: "Regex",
          icon: "regex"
        },       
      ],
      selected: 0
    }
  },

  methods: {
    getIcon: function (categorie, index) {
      if(index == this.selected) {
        // return `${categorie.icon}-selected.svg`
        return require(`../assets/${categorie.icon}-selected.svg`)
      }
      return require(`../assets/${categorie.icon}.svg`)
    }
  },

  components: {
  }
}
</script>

<style scoped>

.side-bar-container {
  min-width: 26rem;
  width: 24%;
  @apply h-full border-r px-6 py-10;
}

.categories {
  height: 70%;
  font-family: 'Noto Sans', sans-serif;  
  @apply flex flex-col justify-between;
}

.categorie {
  background-color: transparent;
  transition: background-color .3s;
  width: 92%;
  @apply py-3 pl-5 flex items-center font-bold text-mainNavyBlue rounded-full;
}

.non-selected:hover{
  background-color: rgb(7, 190, 184, 0.2)
}

.selected.categorie {
  color: white;
  @apply bg-mainNavyBlue rounded-full;
}

img {
  @apply flex items-center mr-4
}

</style>