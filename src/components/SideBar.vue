<template>
  <section class="side-bar-container">
    <head>
      <link href="assets/hamburgers.css" rel="stylesheet">
    </head>
    <ul class="categories">
        <a @click="selected = i" href="#" class="categorie" v-for="(categorie, i) in  categories" :key="categorie.name" :class="{'selected': selected == i,   'non-selected': selected != i}">
          <img class="icon" :src="getIcon(categorie, i)" alt="">
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
  @apply h-full p-0;
}

.categorie-name {
  display: none;
}

.categories {
  height: 570px;
  @apply flex flex-col border-white justify-between items-center px-0 pt-6;
}

.selected.categorie {
  @apply rounded-full bg-pink text-white;
}

.categorie {
  @apply p-2 text-white;
}

button:focus {
  @apply outline-none;
}

@screen md {
  .categories {
    height: 800px;
  }
  .categorie-name {
    @apply block;
  }

  .side-bar-container {
    min-width: 23rem;
    @apply w-1/5 h-full pl-6 py-2;
  }

  .categories {
    font-family: 'Noto Sans', sans-serif;  
    @apply flex flex-col justify-between;
  }

  .categorie {
    transition: background-color .3s;
    @apply py-3 pl-5 bg-transparent flex items-center font-bold rounded-full w-11/12;
  }

  .categorie-name {
    @apply m-0;
  }

  .non-selected:hover{
    background-color: rgb(233,69,96, 0.2);
  }

  .selected.categorie {
    @apply rounded-full text-white;
  }

  .icon {
    @apply flex items-center mr-4;
  }
}

</style>