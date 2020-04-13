<template>
  <div class="sidebar">
    <span>Choose your chords here</span>
    <Chords v-bind:chords="chords" />
  </div>
</template>

<script>
import Chords from "./Chords.vue";
export default {
  name: "SideBar",
  components: {
    Chords
  },
  data() {
    return {
      chords: [
        { id: 1, name: "A" },
        { id: 2, name: "Am" },
        { id: 3, name: "A#" },
        { id: 4, name: "A#m" },
        { id: 5, name: "B" },
        { id: 6, name: "Bm" },
        { id: 7, name: "C" },
        { id: 8, name: "Cm" },
        { id: 9, name: "C#" },
        { id: 10, name: "C#m" },
        { id: 11, name: "D" },
        { id: 12, name: "Dm" },
        { id: 13, name: "D#" },
        { id: 14, name: "D#m" },
        { id: 15, name: "E" },
        { id: 16, name: "Em" },
        { id: 17, name: "F" },
        { id: 18, name: "Fm" },
        { id: 19, name: "F#" },
        { id: 20, name: "F#m" },
        { id: 21, name: "G" },
        { id: 22, name: "Gm" },
        { id: 23, name: "G#" },
        { id: 24, name: "G#m" }
      ]
    };
  }
};
</script>

<style scoped>
.sidebar {
  /* display: flex; */
  width: 20%;
  height: 100%;
  position: fixed;
  background-color: white;
  z-index: inherit;
}
span {
  color: red;
}
</style>
