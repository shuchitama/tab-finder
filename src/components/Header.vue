<template>
  <header class="header">
    <h1>Tab Finder</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/library">Library</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
</style>
