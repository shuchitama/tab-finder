<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>"{{ info }}"</h2>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import Vue from "vue";
Vue.use(VueAxios, axios);

export default {
  data() {
    return {
      info: null
    };
  },
  created() {
    axios
      .get("https://api.kanye.rest/")
      .then(response => (this.info = response.data.quote));
  }
};
</script>

<style scoped>
.about {
  margin-left: 20%;
  background-color: aquamarine;
}
</style>
