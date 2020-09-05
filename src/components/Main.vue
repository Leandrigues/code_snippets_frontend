<template>
  <section class="main-container">
    <TheSearch/>
    <div class="cards">
      <Card v-for="card in cards" :key="card.title" :title="card.title" :description="card.description"/>
    </div>
  </section>
</template>

<script>
import TheSearch from "@/components/TheSearch"
import Card from "@/components/Card"

export default {
  data() {
    return {
      cards: [
        {
          title: "Quick Sort",
          description: "Sort Algorithm O(n lgn)"
        },
        {
          title: "Merge Sort",
          description: "Sort Algorithm O(n)"
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
  @apply px-16 pt-10 w-full h-full border-r;
}

.cards {
  @apply flex justify-between flex-wrap w-full mt-10;
}
</style>