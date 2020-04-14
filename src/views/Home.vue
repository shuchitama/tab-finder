<template>
  <div class="home">
    <Header />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Songlist />
  </div>
</template>

<script>
// import Header from "@/components/Header.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Songlist from "@/components/Songlist.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Songlist
  }
};
</script>
