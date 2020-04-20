<template>
  <section>
    <b-card header="CHOOSE CHORDS TO GET STARTED">
      <div class="grid">
        <button
          class="chord"
          v-bind:class="{ active: isActive(chord.id) }"
          @click="addChord(chord.id)"
          v-bind:key="chord.id"
          v-for="chord in chords"
        >{{chord.name}}</button>
      </div>
      <br />
      <div>
        <b-button 
        @click="submitChords"
        class="submit button">
        Let's get some songs!
        </b-button> |
        <b-button 
          class="clear button" 
          @click="clearChords">
          Clear selection
        </b-button>
      </div>
    </b-card>
  </section>
</template>

<script>
export default {
  name: "Chords",
  props: ["chords"],
  data() {
    return {
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
  methods: {
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
      this.$emit('chords-submitted', this.showChords())
    },
    clearChords() {
      this.selectChords.forEach(element => {element.selected = false})
    }
  }
};
</script>

<style scoped>
.card-body {
  background-color: rgb(128, 128, 128);
  background-image: url("../../public/3.jpg");
}
.card-header {
  background-color: #5B5656;
}
.card {
  border: none;
}
.grid {
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;
  grid-template-rows: auto auto;
  column-gap: 10px;
  row-gap: 10px;
}

.chord {
  border-radius: 4px;
  border: black;
  width: 50px;
  padding: 2% 5%;
  margin: 2% 2%;
  background-color: #3B715A;
  color: whitesmoke;
}

.active {
  background-color: #021C12 ;
}

.button {
  padding: 4px;
}
</style>
