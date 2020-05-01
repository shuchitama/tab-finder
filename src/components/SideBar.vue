<template>
  <div class="sidebar">
    <b-card header="CHOOSE CHORDS TO GET STARTED">
      <div class="grid">
        <Chords 
        v-bind:chords="chords" 
        v-on:chords-submitted="passToParent" 
        v-on:addChord="addChord"
        />
      </div>
      <div id="buttons">
        <b-button @click="submitChords" class="submit-button">
          Let's get some songs!
        </b-button>
        <span>wwww</span>
        <b-button class="clear-button" @click="clearChords">
          Clear selection
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
import Chords from "./Chords.vue";
import axios from "axios";
export default {
  name: "SideBar",
  components: {
    Chords
  },
  data() {
    return {
      chords: [],
      selectChords: [
        { id: 1, selected: false },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false },
        { id: 5, selected: false },
        { id: 6, selected: false },
        { id: 7, selected: false },
        { id: 8, selected: false },
        { id: 9, selected: false },
        { id: 10, selected: false },
        { id: 11, selected: false },
        { id: 12, selected: false },
        { id: 13, selected: false },
        { id: 14, selected: false },
        { id: 15, selected: false },
        { id: 16, selected: false },
        { id: 17, selected: false },
        { id: 18, selected: false },
        { id: 19, selected: false },
        { id: 20, selected: false },
        { id: 21, selected: false },
        { id: 22, selected: false },
        { id: 23, selected: false },
        { id: 24, selected: false }
      ]
    };
  },
  created() {
    axios.get("http://localhost:3001/api/chords").then(res => {
      this.chords = res.data;
    });
  },
  methods: {
    passToParent(payload) {
      this.$emit("chords-submitted", payload);
    },
    addChord(id) {
      const chord = this.selectChords.find(element => element.id === id);
      chord.selected = !chord.selected;
    },
    showChords() {
      const selectedChordsObj = this.selectChords.filter(
        element => element.selected === true
      );
      const selectedChordIDs = [];
      selectedChordsObj.map(element => selectedChordIDs.push(element.id));
      return selectedChordIDs;
    },
    isActive(id) {
      const chord = this.selectChords.find(element => element.id === id);
      return chord.selected;
    },
    submitChords() {
      this.$emit("chords-submitted", this.showChords());
    },
    clearChords() {
      this.selectChords.forEach(element => {
        element.selected = false;
      });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

.sidebar {
  width: 100%;
  height: 20%;
}


.card {
  border: none;
}
span {
  color: white;
}

.card-header {
  font-size: 22px;
}

.card-header {
  font-family: Oswald;
  background-blend-mode: multiply;
  background-image: linear-gradient(to bottom, #7c9388, #7c9388);
}

.grid {
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  grid-template-rows: auto auto;
  column-gap: 20px;
  row-gap: 20px;
}

#buttons {
  margin: 20px;
}

</style>
