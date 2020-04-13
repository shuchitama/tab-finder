<template>
  <div class="profile">
    <h2>This is the Profile page!</h2>
    <p>{{ info }}</p>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(VueAxios, axios);

export default {
  data() {
    return {
      info: null
    };
  },
  created() {
    axios
      .get("http://localhost:8001/api/songs")
      .then(response => (this.info = response.data[2].name));
  }
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
