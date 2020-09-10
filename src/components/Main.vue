<template>
  <section class="main-container">
    <TheSearch/>
    <div class="cards">
      <Card v-for="card in cards" :key="card.title" :title="card.title" :description="sliceDescription(card.description)" :likes="card.likes" :details="card.details"/>
    </div>
  </section>
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
      cards: [
        {
          title: "Quick Sort",
          description: "Sort Algorithm O(n lgn) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam placeat cupiditate perspiciatis ratione aperiam. In dolore excepturi ad rem magni. ",
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
          description: "Breadt-first search in graphs algorithm"
        },
        {
          title: "Binary Search Algorithm",
          description: "O(lg n) algorithm to search an item in an ordered array"
        }
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
  @apply px-32 pt-10 w-full h-full border-r;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @apply mt-10
}
</style>