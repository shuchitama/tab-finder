<template>
  <div class="song">
    <tr>
      <th>Artist</th>
      <th>Song</th>
      <th>Chords</th>
    </tr>
    <tr>
      <td>
        <div class="artist" v-bind:key="song.id" v-for="song in songs">
          {{ song.artist }}
        </div>
      </td>
      <td>
        <div class="title" v-bind:key="song.id" v-for="song in songs">
          {{ song.title }}
        </div>
      </td>
      <td>
        <div class="chords" v-bind:key="song.id" v-for="song in songs">
          {{ song.chords }}
        </div>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  name: "song",
  props: ["songs", "songchords"]
};
</script>

<style scoped>
.songlist {
  color: black;
  background-color: blueviolet;
}
.title {
  color: red;
}
.artist {
  font-style: italic;
}
.chords {
  color: blue;
}
</style>
