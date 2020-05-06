<template>
  <div class="profile">
    <h2>MY PROFILE</h2>
    <div id="profile-card">
      <img src="../../public/avatar.png" />
      <div id="info">
        <p>Username: JANE DOE</p>
        <p>Email: janedoe@gmail.com</p>
      </div>
    </div>
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
  created() {
    axios
      .get("https://tab-finder-api.herokuapp.com/api/usersongs")
      .then(response => {
        this.songIDs = response.data.map(el => el.song_id);
      })
      .then(
        axios
          .get("https://tab-finder-api.herokuapp.com/api/songs")
          .then(res => {
            const allSongs = res.data;
            this.favList = allSongs.filter(song =>
              this.songIDs.includes(song.id)
            );
          })
      );
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

h2 {
  color: #2d2c2d;
  background-color: #7c9388;
  font-family: Oswald;
  height: 50px;
}

#profile-card {
  padding: 20px;
  margin-top: 20px;
  width: 400px;
  background-color: #f3efef;
  font-family: Oswald;
  vertical-align: middle;
  display: inline-block;
}

img {
  height: 130px;
  margin: 10px;
}
</style>
