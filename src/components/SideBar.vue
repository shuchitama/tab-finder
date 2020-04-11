<template>
  <div class="sidebar">
    <span>Choose your chords here</span>
    <ul href="#">C</ul>
    <ul href="#">D</ul>
    <ul href="#">E</ul>
    <ul href="#">F</ul>
    <ul href="#">G</ul>
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
  /* display: flex; */
  width: 20%;
  height: 100%;
  position: fixed;
  background-color: blue;
  z-index: inherit;
}
.sidebar ul {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 15px;
  color: #818181;
  display: block;

}
.sidebar ul:hover {
  color: blueviolet;
}
span {
  color: red;
}
</style>
