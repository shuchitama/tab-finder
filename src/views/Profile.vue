<template>
  <div class="profile">
    <h2>This is the Profile page!</h2>
    <h4>User: {{ user }}</h4>
    <p>My favorite songs are:</p>
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
      user: 1,
      songIDs: [],
      favList: []
    };
  },
  components: {
    Favourites
  },
  created() {
    axios
      .get("http://localhost:3001/api/usersongs")
      .then(response => {
        this.songIDs = (response.data.filter(el => el.user_id === this.user )).map(el => el.song_id);
      })
      .then(
        axios.get("http://localhost:3001/api/songs").then(res => {
        const allSongs = res.data;
        this.favList = allSongs.filter(song => this.songIDs.includes(song.id))
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
