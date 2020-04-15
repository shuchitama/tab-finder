<template>
  <table class="songlist">
    <header> Your results: </header>
    <Song v-bind:songs="songs" />
  </table>
</template>

<script>
import axios from "axios";
import Song from "./Song.vue";
export default {
  name: "songlist",
  components: {
    Song
  },
  data() {
    return {
      songs: [],
    };
  },
  created() {
    axios.get("http://localhost:3001/api/songs")
    .then(res => {
      console.log(res);
      this.songs = res.data;
    });
  }
};
</script>

<style scoped>
.songlist {
  align-self: center;
  margin: auto;
}
</style>
