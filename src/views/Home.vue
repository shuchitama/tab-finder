<template>
  <div class="home">
    <Header />
    <SideBar v-on:chords-submitted="passChordsToSongList"/>
    <Songlist v-bind:chordIDs="chordIDs"/>
  </div>
</template>

<script>
import Songlist from "@/components/Songlist.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "Home",
  components: {
    Songlist,
    SideBar
  },
  data () {
    return {
      chordIDs: []
    }
  },
  methods: {
    passChordsToSongList(chordIDArr) {
      this.chordIDs = chordIDArr
    }
  }
};
</script>
