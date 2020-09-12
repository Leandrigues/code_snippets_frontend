<template>
  <a class="card-outside-container">
    <a href="" class="card-container">
      <div class="information">
        <div class="card-title">{{ title }}</div>
        <div class="description">{{ description }}</div>
      </div>

      <div class="likes-container">
        <img :src="like" />
        <div class="likes">{{ likes }}</div> 
      </div>
    </a>
    
      <div class="tag-container">
          <Tag name="JavaScript"/>
          <Tag name="Java"/>
          <Tag name="Python"/>
          <Tag name="..."/>
      </div>
  </a>
</template>

<script>
import Tag from './Tag'

export default {
  components: {
    Tag
  },
  props: ["title", "description", "likes", "details"],
  data() {
    return {
      like: require(`../assets/like.svg`)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap');

.card-outside-container {
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.4);
  border: solid 1px rgb(230, 230, 230);
  color: rgb(53, 53, 53);
  @apply flex flex-col  py-3 px-4 h-56 w-full mb-10;
}

.card-container {
  font-family: 'Source Sans Pro', sans-serif;
  color: rgb(53, 53, 53);
  @apply flex w-full rounded; 
}

.card-title {
  font-size: 1.3rem;
  @apply font-bold;
}

.description {   
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  @apply  mb-2 h-12 w-full;
}

.information {
  @apply h-full flex flex-col w-full;
}

.likes-container {
  margin-left: auto;
  @apply flex flex-col w-1/4 items-center justify-center
}

.likes {
  @apply font-bold text-lg;
}

.tag-container {
  margin-top: auto;

  @apply flex justify-start w-full;
}
</style>