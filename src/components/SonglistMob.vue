<template>
  <div class="songlist-container">
    <div v-if="filteredSongs.length > 0"></div>
    <br />
    <div id="results">{{ resultCount }}</div>
    <br />
    <section class="songlist">
      <div class="song" v-for="song in filteredSongs" v-bind:key="song.id">
        <Song v-bind:song="song" v-bind:chordIDs="chordIDs" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Song from "./Song.vue";
import _ from "lodash";

export default {
  name: "Songlistmob",
  components: {
    Song
  },
  props: ["chordIDs"],
  data() {
    return {
      AllChords: [],
      AllSongs: [],
      filteredSongs: [],
      resultCount: ""
    };
  },
  watch: {
    chordIDs: function() {
      const arrOfNames = this.chordIDtoName(
        this.AllChords,
        this.$props.chordIDs
      );
      this.filteredSongs = this.AllSongs.filter(
        song =>
          arrOfNames.length === _.uniq(_.concat(song.chords, arrOfNames)).length
      );
    },
    filteredSongs: function() {
      const num = this.filteredSongs.length;
      if (num === 0) {
        this.resultCount = "No results found";
      } else if (num === 1) {
        this.resultCount = "1 result found:";
      } else {
        this.resultCount = `${num} results found:`;
      }
    }
  },
  created() {
    axios.get("https://tab-finder-api.herokuapp.com/api/songs").then(res => {
      this.AllSongs = res.data;
    }),
      axios.get("https://tab-finder-api.herokuapp.com/api/chords").then(res => {
        this.AllChords = res.data;
      });
  },
  methods: {
    chordIDtoName(chordList, arrOfIDs) {
      return arrOfIDs.map(id => {
        const chord = chordList.find(element => element.id === id);
        return chord.name;
      });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

.songlist-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.songlist {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 6px;
  row-gap: 0px;
  justify-items: center;
}

#results {
  font-family: Oswald;
}
</style>
