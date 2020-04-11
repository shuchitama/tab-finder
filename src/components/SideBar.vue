<template>
  <div class="sidebar">
    <span>Choose your chords here</span>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.sidebar {
  display: flex;
  width: 20%;
  background-color: blue;
}
span {
  color: red;
}
</style>
