<template>
  <div class="about">
    <h1>This is the library!</h1>
    <p></p>
    <div id="grid">
      <div v-bind:key="chord.id" v-for="chord in chords">
        <img v-bind:src="chord.url" v-bind:alt="chord.name" />
      </div>
    </div>
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
      this.chords = res.data;
    });
  }
};
</script>

<style scoped>
.about {
  background-color: aquamarine;
}
#grid {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  color: red;
}
</style>
