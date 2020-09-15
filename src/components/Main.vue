<template>
  <div class="main-container">
    <TheSearch/>
    <div class="cards">
      <Card v-for="(card, i) in cards" :key="i" :title="card.title" :description="card.description" :likes="card.likes" :details="card.details"/>
    </div>
  </div>
</template>

<script>
import TheSearch from "@/components/TheSearch"
import Card from "@/components/Card"

export default {
  methods: {
    sliceDescription: function(description) { 
      return description.length > 50 ? description.slice(0, 50) + '...' : description
    }
  },
  data() {
    return {
      selected: 0,
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
        },
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
      ]
    }
  },
  components: {
    TheSearch,
    Card
  }
}
</script>

<style>
.main-container {
  @apply px-6 m-0 w-4/5; 
}

.cards {
  @apply grid col-gap-8 grid-cols-1 mt-10 w-full;
}

@screen md {
  .main-container {
    @apply pr-10 pt-4 w-full h-full;
  }

  .cards {
    @apply grid col-gap-8 grid-cols-3;
  }
}

/* Responsivity to set cards per row */
@media (max-width: 1630px) {
  .cards {
    @apply grid-cols-2
  }
}

@media (max-width: 1295px) {
  .cards {
    @apply grid-cols-1
  }
}
</style>