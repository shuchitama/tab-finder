<template>
  <div class="home">
    <Header />
    <SideBar v-on:chords-submitted="passChordsToSongList"/>
    <br />
    <div><b class="login">Login</b> to create a list with your favourite songs</div>
    <br />
    <Songlist v-bind:chordIDs="chordIDs"/>
    <br />
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
      topten: [2, 3, 4, 6, 9, 10, 20]
    };
  },
  methods: {
    passChordsToSongList(chordIDArr) {
      this.chordIDs = chordIDArr;
    }
  }
};
</script>

<style scoped>
.login:hover {
 color: green;
 border: solid;
 border-radius: 4px;
 padding-left: 4px;
 padding-right: 4px;
 border-color:green;
}
</style>
