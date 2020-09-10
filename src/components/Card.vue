<template>
  <a href="" class="card-container">
    <div class="information">
      <div class="card-title">{{ title }}</div>
      <div class="description">{{ description }}</div>

      <div class="details-container">
        <div class="details-key-container">
          <span class="details-key" v-for="detail in details" :key="detail.key">{{ detail.key }}:</span>
        </div>
        <div class="details-value-container">
          <span class="details-value" v-for="detail in details" :key="detail.value">{{ detail.value }}</span>
        </div>
      </div>
    </div>

    <div class="likes-container">
      <img :src="like" class="like"/>
      <div class="likes">{{ likes }}</div> 
    </div>
    <div class="tags"></div>
  </a>
</template>

<script>
export default {
  components: {
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

.card-container {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.4);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.4);
  border: solid 1px rgb(230, 230, 230);
  color: rgb(53, 53, 53);
  @apply flex h-48 rounded mr-10 mb-10 py-3 px-4; 
}

.card-title {
  font-size: 1.3rem;
  @apply font-bold;
}

.description {
  @apply w-3/4 mb-2 h-12;
}

.information {
  width: 80%;
}

.likes-container {
  @apply flex flex-col h-full items-center justify-center
}

.likes {
  @apply font-bold text-lg;
}

.details-key {
  @apply font-bold
}

.details-value-container {
  @apply flex flex-col
}

.details-key-container {
  @apply flex flex-col;
}

.details-container {
  @apply flex justify-between w-3/4
}
</style>