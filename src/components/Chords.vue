<template>
  <section>
    <b-card header="CHOOSE CHORDS TO GET STARTED!">
      <div class="grid">
        <button class="chord" v-bind:key="chord.id" v-for="chord in chords">{{chord.name}}</button>
        <!-- <b-form-checkbox
          button
          buttonclass="chord"
          v-bind:key="chord.id"
          v-for="chord in chords"
        >{{chord.name}}</b-form-checkbox>-->
      </div>
      <br />
      <b-button class="submit" block>Lets Get Some Songs!</b-button>
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
.grid {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  column-gap: 5px;
  row-gap: 5px;
}

.chord {
  border-radius: 4px;
  border: black;
  width: 50px;
  padding: 2% 5%;
  margin: 2% 2%;
  background-color: coral;
}
</style>