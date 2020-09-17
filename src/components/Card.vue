<template>
  <a class="card-container">
    <div class="information">
      <div class="card-title">{{ title }}</div>
      <div class="card-description">{{ description }}</div>
    </div>
    <div class="tag-container">
      <Tag name="JavaScript"/>
      <Tag name="Java"/>
      <Tag name="Python"/>
      <Tag name="..."/>
    </div>
  </a>
</template>

<script>
import Tag from "./Tag"

export default {
  components: {
    Tag
  },
  props: ["title", "description", "likes", "details"],
  data() {
    return {

    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

.card-container {
  font-family: 'Roboto Mono', monospace;
  -webkit-box-shadow: 10px 10px 22px -4px rgba(0,0,0,0.62);
  -moz-box-shadow: 10px 10px 22px -4px rgba(0,0,0,0.62);
  box-shadow: 10px 10px 22px -4px rgba(0,0,0,0.62);
  @apply flex flex-col bg-navy-secondary h-64 pb-4 w-full mb-10 rounded-md;
}

.card-title {
  @apply text-xl font-bold text-white;
}

.ball {
  height: 0.9rem;
  width: 0.9rem;
  @apply rounded-full;
}

.red-ball {
  background-color: rgb(238, 89, 89);
}

.green-ball {
  background-color: rgb(4, 199, 13);
}

.yellow-ball {
  background-color: rgb(246, 212, 62);
}

.top-bar {
  width: 6rem;
  @apply flex items-start justify-around px-4 py-4 h-4 rounded-md bg-transparent;
}

.information {
  @apply px-8 mt-4
}

.card-description {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @apply overflow-hidden text-white; 
}

.tag-container {
  @apply flex px-8 mt-auto flex-wrap w-full h-8 justify-start;
  overflow-y: hidden;
}
</style>