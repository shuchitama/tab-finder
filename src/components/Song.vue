<template>
  <article>
    <div class="song" v-bind:key="song.id" v-for="song in songs">
      <div class="song-item">
        <section class="song-info">
          <header class="title">
            {{ song.title }}
          </header>
          <div class="artist">
            {{ song.artist }}
          </div>
          <div class="chords">
            Chords: {{ song.chords.join(", ") }}
          </div>
        </section>
        <section class="buttons">
          <button>Favourite</button>
          <button>Percent match</button>
        </section>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "song",
  props: ["songs"]
};
</script>

<style scoped>
.song {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  border: solid;
  border-radius: 8px;
  top: 50px;
  margin: 20px;
  background-color: darkseagreen;
}
.song-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
}
.buttons {
  display: flex;
  flex-direction: column;
}
.title {
  color:black;
  font-weight: bold;
}
.artist {
  font-style: italic;
}
.chords {
  color: black;
}
</style>
