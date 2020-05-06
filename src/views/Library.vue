<template>
  <div class="about">
    <h2>CHORDS LIBRARY</h2>
    <h3>How to read</h3>
    <img id="example" src="../../public/amajor.png" />
    <img id="example" src="../../public/fmajor.png" />
    <div id="grid">
      <div v-bind:key="chord.id" v-for="chord in chords">
        <img id="chord" v-bind:src="chord.url" v-bind:alt="chord.name" />
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
    axios.get("https://tab-finder-api.herokuapp.com/api/chords").then(res => {
      this.chords = res.data;
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

h2 {
  background-color: #717478;
  color: #1b2530;
}

h3 {
  margin: 20px;
}

.about {
  font-family: Oswald;
  background-color: #7c9388;
}

#grid {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  color: red;
  margin: 40px;
  margin-bottom: 0px;
}

#chord:hover {
  background-color: #abc4b8;
  border-radius: 8px;
}

#chord {
  margin: 10px;
}

#example {
  border: 2px solid black;
  margin: 30px;
}
</style>
