<template>
  <section class="side-bar-container">
    <router-link class="logo-router-link" to="/">
      <div class="logo">CodeSnippets</div>
      <div class="logo-mobile">
        <svg height="2rem"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 512.001 512.001" style="transform:rotate(90deg);enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
        <g>
          <g>
            <path height="0px" fill="rgb(233,69,96)" d="M348.691,279.541c15.676,0,30.087,7.912,38.549,21.165l4.445,6.962l8.25,0.001c0.017,0,0.034,0,0.05,0
              c23.061,0,41.901-18.743,42.009-41.806l0.586-126.21l-127.926-0.764c-4.204-0.007-7.899-2.231-9.977-5.56
              c16.664-14.312,26.348-35.112,26.348-57.47c0-20.93-8.339-40.418-23.482-54.874C292.407,6.535,272.535-0.88,251.574,0.083
              c-38.968,1.808-70.686,33.765-72.208,72.754c-0.907,23.213,9,45.538,26.339,60.51c-2.05,3.345-5.721,5.6-9.908,5.65
              l-126.375-0.909v373.912H441.09l0.732-126.922c0.133-22.957-18.437-41.904-41.335-42.237l-8.8-0.005l-4.445,6.962
              c-8.858,13.872-23.961,21.755-40.395,21.128c-23.48-0.918-42.725-20.016-43.814-43.48c-0.586-12.646,3.885-24.634,12.591-33.753
              C324.335,284.567,336.079,279.541,348.691,279.541z"/>
          </g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>


      </div>
    </router-link>
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
        return require(`../assets/categories-backup/${categorie.icon}-selected.svg`)
      }
      return require(`../assets/categories-backup/${categorie.icon}.svg`)
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
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&display=swap");

.logo {
  display: none;
}

.logo-mobile {
  @apply px-2 mt-1 mb-1;
}

.side-bar-container {
  width: 16%;
  @apply h-full px-2 pt-4 border-r border-navy-secondary;
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
  .side-bar-container {
    min-width: 23rem;
    @apply w-1/5 h-full pl-6 py-2 flex flex-col items-start;
  }

  .logo-router-link {
    @apply ml-6 py-6;
  }

  .logo {
    font-family: 'Roboto Slab', serif;
    display: block;
    @apply text-xl font-bold w-full text-pink px-2;
  }

  .logo-mobile {
    display: none;
  }

  .categories {
    height: 800px;
  }
  .categorie-name {
    @apply block;
  }

  .categories {
    font-family: 'Noto Sans', sans-serif;  
    @apply flex flex-col justify-between w-full;
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