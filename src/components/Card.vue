<template>
  <a class="card-outside-container">
    <div href="" class="card-container">
      <div class="information">
        <div class="card-title">{{ title }}</div>
        <div class="description">{{ description }}</div>
        <div class="details" v-for="detail in details" :key="detail.value">
          <div class="detail-key">{{ detail.key }}</div>
          <div class="detail-value">{{ detail.value }}</div>
        </div>
      </div>
    </div>

    <div class="card-bottom-container">
      <div class="tag-container">
          <Tag name="JavaScript"/>
          <Tag name="Java"/>
          <Tag name="Python"/>
          <Tag name="..."/>
      </div>
      <div class="likes-container">
        <img class="likes-img" src="../assets/like.svg" alt="">
        <div class="likes-amount">70</div>
      </div>
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
  @apply flex flex-col pt-3 px-4 h-64 w-full mb-10;
}

.card-container {
  font-family: 'Source Sans Pro', sans-serif;
  color: rgb(53, 53, 53);
  @apply flex w-full rounded; 
}

.card-title {
  @apply font-bold text-xl;
}

.description {   
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @apply  mb-1 h-12 w-full;
}

.information {
  @apply h-full flex flex-col w-full;
}

.card-bottom-container {
  @apply flex w-full m-auto;
}

.likes-container {
  @apply flex flex-wrap items-center justify-start w-full;
}

.likes-img {
  @apply mr-2
}
.likes-amount {
  @apply font-bold text-sm;
}

.detail-key {
  @apply font-bold text-base;
}

.detail-value {
  @apply text-base;
}

.tag-container {
  display: none;
}

/* Responsivity to the bottom of the card */
@screen md {
  .tag-container {
    @apply flex items-center justify-start w-full m-auto;
  }

  .likes-container {
  @apply flex flex-wrap items-center justify-end w-1/5;
  }
}

</style>