<template>
  <article>
    <br />
    <div class="song-card">
      <section class="song-info">
        <div>
          <a v-bind:href="song.url" target="_blank">
            <p class="title">{{ song.title }}</p>
          </a>
        </div>
        <div class="artist">{{ song.artist }}</div>
        <div class="chords">Chords: {{ song.chords.join(", ") }}</div>
      </section>
      <section class="Match">
        <div class="percent-match">{{ percentMatch(song.chords) }}% MATCH</div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: "songmob",
  props: ["song", "chordIDs"],
  methods: {
    percentMatch(chords) {
      return Math.round((chords.length / this.$props.chordIDs.length) * 100);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

.song-card {
  width: 300px;
  height: 87px;
  background-color: #c9d3ce;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  margin-top: -18px;
}

.song-info {
  display: flex;
  flex-direction: column;
}

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

.buttons {
  display: flex;
  flex-direction: column;
}

.percent-match {
  width: 65px;
  font-family: Oswald;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  color: #889c91;
  padding-top: 25px;
  text-align: right;
}

.title {
  text-transform: uppercase;
  text-align: justify;
  margin-bottom: 4px;
  margin-top: -3px;
  width: 200px;
  height: 20px;
  font-family: Oswald;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #233d32;
}

.artist,
.chords {
  width: 207px;
  height: 30px;
  font-family: inherit;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  letter-spacing: normal;
  color: #4a4a4a;
}
</style>
