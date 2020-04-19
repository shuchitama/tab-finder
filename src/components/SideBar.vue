<template>
  <div class="sidebar">
    <Chords v-bind:chords="chords" v-on:chords-submitted="passToParent"/>
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
      this.chords = res.data;
    });
  },
  methods: {
    passToParent(payload) {
      this.$emit('chords-submitted', payload)
    }
  }
};
</script>

<style scoped>
/* Mobile version */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: 20%;
  }
}

/* Desktop version */
@media screen and (min-width: 700px) {
  .sidebar {
    width: 285px;
    height: 300px;
  }
}
</style>

