<template>
  <article>
    <div class="song" v-bind:key="song.id" v-for="song in filteredSongs">
      <div class="song-item">
        <section class="song-info">
          <header class="title">
            <a v-bind:href="song.url" target="_blank">{{ song.title }}</a>
          </header>
          <div class="artist">
            {{ song.artist }}
          </div>
          <div class="chords">
            Chords: {{ song.chords.join(", ") }}
          </div>
        </section>
        <section class="buttons">
          <a class="favourite"><b><b-icon icon="plus"></b-icon></b> Add to Favourites</a>
          <button>Percent match</button>
        </section>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "song",
  props: ["filteredSongs"]
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
.song-item:hover .favourite{
  opacity: 1;
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

.favourite {
  opacity: 0;
}

</style>
