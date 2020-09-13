<template>
  <span class="tag" :style="{backgroundColor: tagColorPick(name)}">
    {{ name }}
  </span>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    tagColorPick(name) {
      switch(name) {
        case "JavaScript":
          return "#ffda38"
        case "Java":
          return "#ff4a71"
        case "Python":
          return "#4460ff"
        case "...":
          return "#F87060"
      }
    }
  }
}
</script>

<style>
.tag {
  color: white;
  @apply font-bold text-base mr-2 px-3 py-1 rounded;
}

</style>