<template>
  <section class="side-bar-container">
    <head>
      <link href="assets/hamburgers.css" rel="stylesheet">
    </head>
    <ul class="categories">
        <a @click="selected = i" href="#" class="categorie" v-for="(categorie, i) in  categories" :key="categorie.name" :class="{'selected': selected == i,   'non-selected': selected != i}">
          <img :src="getIcon(categorie, i)" alt="">
          <p class="categorie-name">{{ categorie.name }}</p>
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
      hamburgerState: "is-active",
      selected: 0
    }
  },
  methods: {
    getIcon: function (categorie, index) {
      if(index == this.selected) {
        return require(`../assets/${categorie.icon}-selected.svg`)
      }
      return require(`../assets/${categorie.icon}.svg`)
    },

    flipHamburgerState: function() {
      if (this.hamburgerState == "is-active") {
        this.hamburgerState = "" 
      } else {
        this.hamburgerState = "is-active"
      }

    }
  },

  components: {
  }
}
</script>

<style scoped>


.side-bar-container {
  width: 16%;
  @apply h-full border-r p-0;
}

.categorie-name {
  display: none;
}

.categories {
  height: 70%;
  @apply flex flex-col justify-between items-center px-0 pt-6;
}

.selected.categorie {
  color: white;
  @apply bg-mainNavyBlue rounded-full;
}

.categorie {
  @apply p-2
}
button:focus {
  outline: none;
}

@screen md {
  .categorie-name {
    display: block;
  }

  .side-bar-container {
    min-width: 23rem;
    width: 20%;
    @apply h-full border-r pl-6 py-6;
  }

  .categories {
    height: 70%;
    font-family: 'Noto Sans', sans-serif;  
    height: 600px;
    @apply flex flex-col justify-between;
  }

  .categorie {
    background-color: transparent;
    transition: background-color .3s;
    @apply py-3 pl-5 flex items-center font-bold text-mainNavyBlue rounded-full w-11/12;
  }

  .categorie-name {
    padding: 0;
    margin: 0;
  }

  .non-selected:hover{
    background-color: rgb(52, 84, 209, 0.1)
  }

  .selected.categorie {
    color: white;
    @apply bg-mainNavyBlue rounded-full;
  }

  img {
    @apply flex items-center mr-4
  }
}

</style>