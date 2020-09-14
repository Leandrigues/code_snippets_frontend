<template>
  <a class="card-container">
    <div class="top-bar">
      <div class="red-ball"></div>
      <div class="yellow-ball"></div>
      <div class="green-ball"></div>
    </div>
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
  background-color: rgb(37, 37, 37);
  -webkit-box-shadow: 10px 10px 22px -4px rgba(0,0,0,0.62);
  -moz-box-shadow: 10px 10px 22px -4px rgba(0,0,0,0.62);
  box-shadow: 10px 10px 22px -4px rgba(0,0,0,0.62);
  @apply flex flex-col h-64 pb-4 w-full mb-10 rounded-md;
}

.card-title {
  color: white;
  @apply text-xl font-bold;
}

.red-ball {
  background-color: rgb(238, 89, 89);
  height: 0.9rem;
  width: 0.9rem;
  @apply rounded-full;
}

.green-ball {
  background-color: rgb(4, 199, 13);
  height: 0.9rem;
  width: 0.9rem;
  @apply rounded-full;
}

.yellow-ball {
  background-color: rgb(246, 212, 62);
  height: 0.9rem;
  width: 0.9rem;
  @apply rounded-full;
}

.top-bar {
  background-color: rgb(37, 37, 37);
  width: 6rem;
  @apply flex items-start justify-around px-4 py-4 h-4 rounded-md ;
}

.information {
  @apply px-8 mt-4
}

.card-description {
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.tag-container {
  @apply px-8 mt-auto;
}
</style>