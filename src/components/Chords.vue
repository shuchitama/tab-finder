<template>
  <section>
    <button
      class="chord"
      v-bind:class="{ active: isActive(chord.id) }"
      @click="addChord(chord.id)"
    >
      {{ chord.name }}
    </button>
  </section>
</template>

<script>
export default {
  name: "Chords",
  props: ["chord", "selectChords"],
  methods: {
    addChord(id) {
      this.$emit("addChord", id);
    },
    isActive(id) {
      const chord = this.$props.selectChords.find(element => element.id === id);
      return chord.selected;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");


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

</style>
