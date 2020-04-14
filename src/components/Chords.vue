<template>
  <section>
    <b-card header="CHOOSE CHORDS TO GET STARTED!">
      <div class="grid">
        <button v-bind:key="chord.id" v-for="chord in chords">{{chord.name}}</button>
        <!-- <b-form-checkbox button>{{chord.name}}</b-form-checkbox> -->
      </div>
      <br />
      <br />
      <b-button block>Lets Get Some Songs!</b-button>
    </b-card>
  </section>
</template>

<script>
export default {
  name: "Chords",
  props: ["chords"]
};
</script>

<style scoped>
/* section {
  display: flex;
  flex-direction: column;
} */

.grid {
  background-color: turquoise;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  column-gap: 5px;
  row-gap: 5px;
}

button {
  width: 50px;
  padding: 2% 5%;
  margin: 2% 2%;
  background-color: teal;
}
</style>