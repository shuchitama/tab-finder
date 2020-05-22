<template>
  <div id="app">
    <Header v-if="!this.$store.state.mobView" />
    <HeaderMob v-if="this.$store.state.mobView" />
    <keep-alive include="Home">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HeaderMob from "./components/HeaderMob.vue";

export default {
  name: "app",
  components: {
    Header,
    HeaderMob
  },
  created() {
    this.$store.commit("handleView");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #717478;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
