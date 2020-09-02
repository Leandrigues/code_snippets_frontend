<template>
  <section class="main-container">
    <TheSearch/>
    <div class="cards">
      <Card  />
    </div>
  </section>
</template>

<script>
import TheSearch from "@/components/TheSearch"
import Card from "@/components/Card"

export default {
  components: {
    TheSearch,
    Card
  }
}
</script>

<style>
.main-container {
  @apply pt-10 pl-16 w-full h-full border-r;
}

.cards {
  @apply flex w-full flex-wrap mt-10;
}
</style>