<template>
  <div class="home">
    <SideBar v-if="!this.$store.state.mobView" v-on:chords-submitted="passChordsToSongList" />
    <SideBarMob v-if="this.$store.state.mobView" v-on:chords-submitted="passChordsToSongList" />
    <Songlist v-if="!this.$store.state.mobView" v-bind:chordIDs="chordIDs" />
    <SonglistMob v-if="this.$store.state.mobView" v-bind:chordIDs="chordIDs" />
    <br />
    <Topten v-if="!this.$store.state.mobView" v-bind:topten="topten" />
    <ToptenMob v-if="this.$store.state.mobView" v-bind:topten="topten" />
  </div>
</template>

<script>
import Songlist from "@/components/Songlist.vue";
import SonglistMob from "@/components/SonglistMob.vue";
import SideBar from "@/components/SideBar.vue";
import SideBarMob from "@/components/SideBarMob.vue";
import Topten from "@/components/Topten.vue";
import ToptenMob from "@/components/ToptenMob.vue";

export default {
  name: "Home",
  components: {
    Songlist,
    SonglistMob,
    SideBar,
    SideBarMob,
    Topten,
    ToptenMob
  },
  data() {
    return {
      chordIDs: [],
      topten: [2, 3, 4, 6, 9, 20]
    };
  },
  methods: {
    passChordsToSongList(chordIDArr) {
      this.chordIDs = chordIDArr;
    }
  }
};
</script>
