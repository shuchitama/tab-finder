<template>
  <div class="profile">
    <h2>This is the Profile page!</h2>
    <Favourites v-bind:favList="favList" />
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import Vue from "vue";
import Favourites from "../components/Favourites";
Vue.use(VueAxios, axios);

export default {
  data() {
    return {
      songIDs: [],
      favList: []
    };
  },
  components: {
    Favourites
  },
  mounted() {
    axios
      .get("http://localhost:3001/api/usersongs")
      .then(response => {
        console.log("request to usersongs successful")
        this.songIDs = (response.data.map(el => el.song_id));
      })
      .then(
        axios.get("http://localhost:3001/api/songs").then(res => {
        console.log("request to songs successful")
        console.log("songIDs: ", this.songIDs)
        const allSongs = res.data;
        console.log("allSongs: ", allSongs)
        const list = allSongs.filter(song => this.songIDs.includes(song.id))
        // this.favList = allSongs.filter(song => this.songIDs.includes(song.id))
        console.log("favList inside Profile :", list);
        })
      )
  }
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
