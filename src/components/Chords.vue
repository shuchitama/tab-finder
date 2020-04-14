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
      <b-button class="submit" block>Let's get some songs!</b-button>
    </b-card>
    <div>{{showChords()}}</div>
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
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  column-gap: 10px;
  row-gap: 10px;
}

.chord {
  border-radius: 4px;
  border: black;
  width: 50px;
  padding: 2% 5%;
  margin: 2% 2%;
  background-color: forestgreen;
}

.active {
  background-color: greenyellow;
}
</style>
