<template>
  <div class="main-container">
    <div class="cards">
      <Card v-for="(card, i) in cards" :key="i" :title="card.title" :description="card.description" :likes="card.likes" :details="card.details"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
      cards: [],
    }
  },
  components: {
    Card
  },
  created() {
    axios.get('http://localhost:3000/snippets').then((res) => {
      this.cards = res.data
    })
  }
}
</script>

<style>
.main-container {
  @apply px-6 m-0 w-4/5; 
}

.cards {
  @apply grid col-gap-8 grid-cols-1 mt-4 w-full;
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