<template>
  <table class="songlist">
    <header>Your results:</header>
    <Song v-bind:filteredSongs="filteredSongs" />
    <div>from SongList:</div>
  </table>
</template>

<script>
import axios from "axios";
import Song from "./Song.vue";
import _ from 'lodash'
export default {
  name: "songlist",
  components: {
    Song
  },
  props: ["chordIDs"],
  watch: {
    "chordIDs": function() {
      const arrOfNames = this.chordIDtoName(this.AllChords, this.$props.chordIDs)
      this.filteredSongs = this.AllSongs.filter(song => _.isEqual(song.chords.sort(), arrOfNames.sort()))
    }
  },
  data() {
    return {
      AllChords:[],
      AllSongs: [],
      filteredSongs: []
    };
  },
  created() {
    axios.get("http://localhost:3001/api/songs").then(res => {
      this.AllSongs = res.data;
    }),
    axios.get("http://localhost:3001/api/chords").then(res => {
      this.AllChords = res.data;
    })
  },
  methods: {
    chordIDtoName(chordList, arrOfIDs) {
      return arrOfIDs.map (id => {
      const chord = chordList.find(element => element.id === id)
      return chord.name;
      })
    }
  }
}
</script>

<style scoped>
.songlist {
  align-self: center;
  margin: auto;
}
</style>
