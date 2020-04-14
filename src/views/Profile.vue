<template>
  <div class="profile">
    <h2>This is the Profile page!</h2>
    <p>My favorite songs are: {{ info }}</p>
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
      .get("http://localhost:3001/api/songs")
      .then(response => (this.info = response.data[2].title));
  }
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
