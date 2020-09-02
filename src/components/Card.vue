<template>
  <div class="card-container">

      <div class="code-thumb"></div>
        <div id="teste">

        </div>
      <div class="card-bottom">
        <p class="title">There is some title here</p>
      </div>
  </div>
</template>

<script>
// import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
export default {
  components: {
    // CodeHighlight
  },
  data() {
    return {
      sourcecode: `function code() {
          return 1+1
    }`
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

#teste {
  position: absolute;
  width: 10rem;
}


.card-container {
  @apply flex flex-col justify-center h-64 w-56 mr-10;
}

.code-thumb {
  background-color: rgb(42, 42, 42);
  @apply h-40 w-full rounded-t-md;
}

.title {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.9rem;
} 

.javascript {
}

.card-bottom {
  border-left: solid 1px rgb(223, 223, 223);
  border-right: solid 1px rgb(223, 223, 223);
  border-bottom: solid 1px rgb(223, 223, 223);
  @apply h-20 w-full rounded-b-md pt-2 px-2;
}
</style>