<template>
  <div class="card-container">
      <div class="code-thumb"></div>
      <div class="card-bottom">
        <p class="card-title">{{title}}</p>
        <p class="card-description">{{description}}</p>
        <p class=""> </p>
      </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: ["title", "description", "tags"],
  data() {
    return {
      sourcecode: `function code() {
          return 1+1
    }`
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap');

.card-container {
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.4);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.4);
  width: 20rem;
  height: 21rem;
  @apply flex flex-col  mb-10 rounded-md;

}

.code-thumb {
  background-color: rgb(42, 42, 42);
  @apply h-56 w-full rounded-t-md;
}

.card-title {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;

} 

.card-bottom {
  @apply h-24 w-full pt-2 px-4 rounded-b-md;
}

.card-description {
  font-size: 0.9rem;
  color: rgb(83, 83, 83);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>