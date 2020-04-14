<template>
  <div class="about">
    <h1>This is the library!</h1>
    <h2 v-bind:key="chord.id" v-for="chord in chords">
      {{ chord.name }} --- guitar / ukulele
    </h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      chords: []
    };
  },
  created() {
    axios.get("http://localhost:3001/api/chords").then(res => {
      console.log(res);
      this.chords = res.data;
    });
  }
};
</script>

<style scoped>
.about {
  margin-left: 20%;
  background-color: aquamarine;
}
</style>
