<template>
  <div>
    <section class="songlist">
    <div v-if="filteredSongs.length > 0">
      <Login />
    </div>
    <div>{{resultCount}}</div>
      <div class="song" 
      v-for="song in filteredSongs"
      v-bind:key="song.id">
        <Song 
        v-bind:song="song"
        v-on:fav-added="addfav"/>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Song from "./Song.vue";
import Login from "@/components/Login.vue";
import _ from "lodash";

export default {
  name: "songlist",
  components: {
    Song,
    Login
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
    "chordIDs": function() {
      const arrOfNames = this.chordIDtoName(this.AllChords, this.$props.chordIDs)
      this.filteredSongs = this.AllSongs.filter(song => arrOfNames.length === (_.uniq(_.concat(song.chords, arrOfNames)).length))
    },
    "filteredSongs": function() {
      const num = this.filteredSongs.length;
      if (num === 0) {
        this.resultCount = "No results found"
      } else if (num === 1) {
        this.resultCount = "1 result found:"
      } else {
        this.resultCount = `${num} results found:`
      }
    }
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
    },
    addfav(id) {
      console.log(id);
    }
  }
}
</script>

<style scoped>
.songlist {
  align-self: center;
  margin: auto;
  border: solid;
  width: 50%;
}
</style>
