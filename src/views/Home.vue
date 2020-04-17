<template>
  <div class="home">
    <Header />
    <SideBar v-on:chords-submitted="passChordsToSongList"/>
    <br />
    <Login />

    <br />
    <Songlist v-bind:chordIDs="chordIDs"/>
  </div>
</template>

<script>
import Songlist from "@/components/Songlist.vue";
import SideBar from "@/components/SideBar.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Songlist,
    SideBar,
    Login
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
