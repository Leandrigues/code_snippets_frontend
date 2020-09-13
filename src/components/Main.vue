<template>
  <div class="main-container">
    <TheSearch/>
    <div class="cards">
      <CardDois v-for="card in cards" :key="card.title" :title="card.title" :description="card.description" :likes="card.likes" :details="card.details"/>
    </div>
  </div>
</template>

<script>
import TheSearch from "@/components/TheSearch"
import CardDois from "@/components/CardDois"

export default {
  methods: {
    sliceDescription: function(description) { 
      return description.length > 50 ? description.slice(0, 50) + '...' : description
    }
  },
  data() {
    return {
      cards: [
        {
          title: "Quick Sort",
          description: "Sort Algorithm O(n lgn) Lorem ipsum dolor sit amet consectetur, adipisicing elit Veniam placeat cupiditate perspiciatis ratione aperiam. In dolore excepturi ad rem magni",
          details: [
            {
              key: "Time complexity",
              value: "O(n lgn)"
            },
            {
              key: "Space complexity",
              value: "O(n)"
            }
          ],
          likes: 75
        },
        {
          title: "Merge Sort",
          description: "Sort Algorithm O(n)",
          details: [
            {
              key: "Time complexity",
              value: "O(n lgn)"
            },
            {
              key: "Space complexity",
              value: "O(n)"
            }
          ],
          likes: 10
        },
        {
          title: "BFS Algorithm",
          description: "Breadt-first search in graphs algorithm",
          details: [
            {
              key: "Time complexity",
              value: "O(n lgn)"
            },
            {
              key: "Space complexity",
              value: "O(n)"
            }
          ]
        },
        {
          title: "Binary Search Algorithm",
          description: "O(lg n) algorithm to search an item in an ordered array",
          details: [
            {
              key: "Time complexity",
              value: "O(n lgn)"
            },
            {
              key: "Space complexity",
              value: "O(n)"
            }
          ]
        }
      ]
    }
  },
  components: {
    TheSearch,
    CardDois
  }
}
</script>

<style>
.main-container {
  width: 80%;
  @apply px-6 m-0; 
}

.cards {
  column-gap: 2rem;
  grid-template-columns: 1fr;
  @apply grid mt-10 w-full;
}

@screen md {
  .main-container {
    @apply pr-10 pt-8 w-full h-full border-r;
  }

  .cards {
    display: grid;
    column-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/* Responsivity to set cards per row */

@media (max-width: 1630px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 1295px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>