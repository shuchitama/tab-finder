<template>
  <div class="topten">
    <h4>MOST SEARCHED SONGS:</h4>
    <table id="table">
      <tr>
        <th>SONG</th>
        <th>ARTIST</th>
        <th>CHORDS</th>
      </tr>
      <tr>
        <td>
          <div class="title" v-bind:key="song.id" v-for="song in TopTenSongs">
            <a v-bind:href="song.url" target="_blank">
              <p class="title">{{ song.title }}</p>
            </a>
          </div>
        </td>
        <td>
          <div class="artist" v-bind:key="song.id" v-for="song in TopTenSongs">{{ song.artist }}</div>
        </td>
        <td>
          <div
            class="chords"
            v-bind:key="song.id"
            v-for="song in TopTenSongs"
          >{{ song.chords.join(", ") }}</div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TopTen",
  data() {
    return {
      TopTenSongs: []
    };
  },
  props: ["topten"],
  created() {
    axios.get("https://tab-finder-api.herokuapp.com/api/songs").then(res => {
      const allSongs = res.data;
      this.TopTenSongs = allSongs.filter(song => this.topten.includes(song.id));
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

.topten {
  background-color: #e7e3e3;
  font-family: Oswald;
  height: 400px;
  padding-top: 20px;
}

table {
  margin: 0 auto;
  margin-top: 20px;
}

h3 {
  letter-spacing: 1px;
}

th {
  width: 150px;
  background-color: #7c9388;
  letter-spacing: 1px;
  height: 40px;
  font-size: 15px;
  letter-spacing: 2px;
}

td {
  background-color: #c9d3ce;
  height: 50px;
  font-size: 15px;
}

.title {
  text-transform: uppercase;
  height: 40px;
  font-family: Oswald;
  color: #233d32;
  width: 140px;
  margin-bottom: 0px;
}

.chords {
  color: #4a4a4a;
  height: 40px;
}

.artist {
  height: 40px;
}
</style>
