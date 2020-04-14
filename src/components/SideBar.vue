<template>
  <div class="sidebar">
    <Chords v-bind:chords="chords" />
  </div>
</template>

<script>
import Chords from "./Chords.vue";
import axios from "axios";
export default {
  name: "SideBar",
  components: {
    Chords
  },
  data() {
    return {
      chords: []
    };
  },
  created() {
    axios.get("http://localhost:3001/api/chords").then(res => {
      console.log(res);
      this.chords = res.data;
    });
  }
};
</script>

<style scoped>
.sidebar {
  width: 40%;
  height: 100%;
  overflow-y: scroll;
  background-color: white;
  z-index: inherit;
}
span {
  color: red;
}
</style>
