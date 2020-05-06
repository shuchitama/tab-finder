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
.chord {
  border-radius: 4px;
  border: black;
  width: 80px;
  height: 40px;
  font-size: 18px;
  color: #878787;
  font-family: Oswald;
  background-color: #dddddd;
}

.active {
  background-color: #a6c7b7;
}
</style>
