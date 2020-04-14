<template>
  <table class="songlist">
    <Song v-bind:songs="songs" v-bind:songchords="songchords" />
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
      songchords: []
    };
  },
  created() {
    axios.get("http://localhost:3001/api/songs").then(res => {
      console.log(res);
      this.songs = res.data;
    }),
      axios.get("http://localhost:3001/api/songchords").then(res => {
        this.songchords = res.data;
      });
  }
};
</script>

<style scoped>
.songlist {
  color: black;
  background-color: blueviolet;
}
</style>
