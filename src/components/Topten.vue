<template>
  <div class="topten">
    <tr>
      <th>Artist</th>
      <th>Song</th>
      <th>Chords</th>
    </tr>
    <tr>
      <td>
        <div class="artist" v-bind:key="song.id" v-for="song in TopTenSongs">
          {{ song.artist }}
        </div>
      </td>
      <td>
        <div class="title" v-bind:key="song.id" v-for="song in TopTenSongs">
          {{ song.title }}
        </div>
      </td>
      <td>
        <div class="chords" v-bind:key="song.id" v-for="song in TopTenSongs">
          {{ song.chords }}
        </div>
      </td>
    </tr>
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
.songlist {
  color: black;
  background-color: blueviolet;
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
