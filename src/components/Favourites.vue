<template>
  <div class="favs">
    <div id="separation">
      <span></span>
      <h3>MY FAVOURITE SONGS</h3>
      <span></span>
    </div>
    <table>
      <tr>
        <th>SONG</th>
        <th>ARTIST</th>
        <th>CHORDS</th>
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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap');
h3 {
  font-family: Oswald;
  font-size: 20px;
}
span {
  width: 300px;
  height: 1px;
  border: solid 1px #c8c8c9;
  margin: 10px;
}

#separation {
  display: flex;
  justify-content: center;
}

.favs {
  font-family: Oswald;
  height: 500px;
  padding-top: 30px;
}

table {
  margin: 0 auto;
  margin-top: 30px;
}

h3 {
  letter-spacing: 1px;
}

th {
  width: 300px;
  background-color: #7c9388;
  letter-spacing: 1px;
  height: 50px;
  font-size: 20px;
  letter-spacing: 2px;
}

td {
  background-color: #c9d3ce;
  height: 30px;
  font-size: 20px;
}

.title {
  height: 40px;
}

.chords {
  color: #4a4a4a;
  height: 40px;
}
.artist {
  height: 40px;
}
</style>
