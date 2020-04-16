<template>
  <div class="home">
    <Header />
    <SideBar v-on:chords-submitted="passChordsToSongList" />
    <Songlist v-bind:chordIDs="chordIDs" />
    <Topten v-bind:topten="topten" />
  </div>
</template>

<script>
import Songlist from "@/components/Songlist.vue";
import SideBar from "@/components/SideBar.vue";
import Topten from "@/components/Topten.vue";

export default {
  name: "Home",
  components: {
    Songlist,
    SideBar,
    Topten
  },
  data() {
    return {
      chordIDs: [],
      topten: [25, 3, 4, 5, 7, 21, 24]
    };
  },
  methods: {
    passChordsToSongList(chordIDArr) {
      this.chordIDs = chordIDArr;
    }
  }
};
</script>
