<template>
  <div class="home">
    <Header />
    <SideBar v-on:chords-submitted="passChordsToSongList"/>
    <br />
    <Login />

    <br />
    <Songlist v-bind:chordIDs="chordIDs"/>
    <br />
    <Topten v-bind:topten="topten" />
  </div>
</template>

<script>
import Songlist from "@/components/Songlist.vue";
import SideBar from "@/components/SideBar.vue";
import Login from "@/components/Login.vue";
import Topten from "@/components/Topten.vue";

export default {
  name: "Home",
  components: {
    Songlist,
    SideBar,
    Login,
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
