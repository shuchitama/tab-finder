<template>
  <div class="topten">
    <h3>MOST SEARCHED SONGS:</h3>
    <table>
      <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Chords</th>
      </tr>
      <tr>
        <td>
          <div class="title" v-bind:key="song.id" v-for="song in TopTenSongs">
            <a v-bind:href="''+song.url+''" target="_blank">{{ song.title }}</a> 
          </div>
        </td>
        <td>
          <div class="artist" v-bind:key="song.id" v-for="song in TopTenSongs">
            {{ song.artist }}
          </div>
        </td>
        <td>
          <div class="chords" v-bind:key="song.id" v-for="song in TopTenSongs">
            {{ song.chords.join(", ") }}
          </div>
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
    axios.get("http://localhost:3001/api/songs").then(res => {
      const allSongs = res.data;
      this.TopTenSongs = allSongs.filter(song => this.topten.includes(song.id));
    })
  }
};
</script>

<style scoped>
.topten {
  margin: 5%;
}
table {
  margin: 0 auto;
  background-color: aquamarine;
}
tr {
  margin: 10px;
}
.title {
  color: red;
}
.artist {
  font-style: italic;
}
.chords {
  color: blue;
}
</style>
