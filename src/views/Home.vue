<template>
  <div class="home">
    <Header />
    <SideBar v-on:chords-submitted="passChordsToSongList"/>
    <Songlist v-bind:sendToSongList="sendToSongList"/>
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
      sendToSongList: []
    }
  },
  methods: {
    passChordsToSongList(chordIDArr) {
      this.sendToSongList = chordIDArr
    }
  }
};
</script>
