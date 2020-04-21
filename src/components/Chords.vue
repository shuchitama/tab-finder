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
      <div id="buttons">
        <b-button 
        @click="submitChords"
        class="submit-button">
        Let's get some songs!
        </b-button>
        <span>wwww</span>
        <b-button 
          class="clear-button" 
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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap');

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

.chord {
  border-radius: 4px;
  border: black;
  width: 80px;
  height: 40px;
  font-size: 18px;
  /* font-weight: bold; */
  color: #878787;
  font-family: Oswald;
  /* padding: 2% 5%; */
  /* margin: 2% 2%; */
  /* background-color: rgb(9, 53, 9); */
  background-color: #dddddd;
}

.active {
  background-color: #a6c7b7;
}

#buttons {
  margin: 20px;
}

.submit-button {
  width: 300px;
  height: 50px;
  border-radius: 3px;
  background-color: #233d32;
  color: #ffe1b1;
  font-family: Oswald;
  font-size: 24px;
}

.clear-button {
  width: 300px;
  height: 50px;
  border: solid 1.5px #233d32;
  color: #233d32;
  background-color: #ffffff;
  font-family: Oswald;
  font-size: 24px;
  text-align: center;

}

</style>
