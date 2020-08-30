<template>
  <section class="main-container">
    <TheSearch/>
  </section>
</template>

<script>
import TheSearch from "@/components/TheSearch"

export default {
  components: {
    TheSearch
  }
}
</script>

<style>
.main-container {
  @apply pt-5 w-full h-full border-r;
}
</style>