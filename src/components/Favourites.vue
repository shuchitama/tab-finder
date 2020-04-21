<template>
  <div class="topten">
    <h3>Favourite songs:</h3>
    <table>
      <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Chords</th>
      </tr>
      <tr>
        <td>
          <div class="title" v-bind:key="song.id" v-for="song in favList">
            <a v-bind:href="song.url" target="_blank">{{ song.title }}</a>
          </div>
        </td>
        <td>
          <div class="artist" v-bind:key="song.id" v-for="song in favList">
            {{ song.artist }}
          </div>
        </td>
        <td>
          <div class="chords" v-bind:key="song.id" v-for="song in favList">
            {{ song.chords.join(", ") }}
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Favourites",
  props: ["favList"]
};
</script>

<style scoped>
.topten {
  /* margin: 5%; */
  background-color: #f3efef;
}
a {
  color: red;
}
table {
  margin: 0 auto;
  background-color: aquamarine;
}
tr {
  margin: 10px;
}
.artist {
  font-style: italic;
}
.chords {
  color: blue;
}
</style>
