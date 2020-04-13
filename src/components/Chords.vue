<template>
  <section>
    <b-card-group deck>
      <b-card header="CHOOSE CHORDS TO GET STARTED!">
        <b-list-group v-bind:key="chord.id" v-for="chord in chords">
          <b-list-group-item button>{{chord.name}}</b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </section>
</template>

<script>
export default {
  name: "Chords",
  props: ["chords"]
};
</script>

<style scoped>
</style>