<template>
  <table class="filtered-songlist">
    <div>selectedChordIDs</div>
    <tr>
      <th>Artist</th>
      <th>Song</th>
      <th>Chords</th>
    </tr>
    <tr>
      <td>
        <div class="artist" v-bind:key="song.id" v-for="song in songs">
          {{ song.artist }}
        </div>
      </td>
      <td>
        <div class="title" v-bind:key="song.id" v-for="song in songs">
          {{ song.title }}
        </div>
      </td>
      <td>
        <div class="chords" v-bind:key="song.id" v-for="song in songs">
          {{ song.chords }}
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import Song from "./Song.vue";
import Chords from "./Chords.vue";
export default {
  name: "filterSongs",
  props: ["selectedChordIDs"],
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
      this.songs = res.data;
    })
  },
  methods: {
    filtersongs(songsObj, chordsArr) {

    },
    showChords() {}
  }
  
};
</script>

<style scoped>
.songlist {
  color: black;
  background-color: blueviolet;
}
</style>
