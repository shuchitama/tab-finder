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
        <div class="artist">
          {{ song.artist }}
        </div>
        <div class="chords">Chords: {{ song.chords.join(", ") }}</div>
      </section>
      <section class="favAndMatch">
        <div class="favourite" @click="toggleFavourite(song.id)">
          <div v-if="this.$store.state.login === false">
            <b-icon icon="heart"></b-icon>
          </div>
          <div v-else>
            <b-icon v-if="isFave(song.id)" icon="heart-fill"></b-icon>
            <b-icon v-else icon="heart"></b-icon>
          </div>
        </div>
        <div class="percent-match">{{ percentMatch(song.chords) }}% MATCH</div>
      </section>
    </div>
  </article>
</template>

<script>
import axios from "axios";
export default {
  name: "song",
  props: ["song", "chordIDs"],
  data() {
    return {
      allFavourites: [],
    };
  },
  created() {
    axios.get("/api/usersongs").then((response) => {
      this.allFavourites = response.data.map((el) => el.song_id);
    });
  },
  methods: {
    toggleFavourite(id) {
      if (this.allFavourites.includes(id)) {
        this.deleteFav(id);
      } else {
        this.addToFav(id);
      }
    },
    addToFav(id) {
      if (this.$store.state.login === true) {
        axios
          .put("/api/usersongs", { userid: 1, songid: id })
          .catch((error) => console.log(error));
        this.allFavourites.push(id);
      } else {
        alert("Please log in to add the song to your favourites!");
      }
    },
    deleteFav(id) {
      if (this.$store.state.login === true) {
        axios
          .delete("/api/usersongs", {
            data: { songid: id },
          })
          .catch((error) => console.log(error));
        this.allFavourites = this.allFavourites.filter((el) => el !== id);
      } else {
        alert("Please log in to add the song to your favourites!");
      }
    },
    isFave(id) {
      return this.allFavourites.includes(id);
    },
    percentMatch(chords) {
      return Math.round((chords.length / this.$props.chordIDs.length) * 100);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

.song-card {
  width: 330px;
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

.favourite {
  width: 21px;
  height: 20px;
  margin-top: -3px;
  margin-left: 10px;
  align-self: flex-end;
  color: #889c91;
  cursor: pointer;
}

.percent-match {
  width: 85px;
  font-family: Oswald;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  color: #889c91;
  padding-top: 25px;
  text-align: right;
}

.favAndMatch {
  display: flex;
  flex-direction: column;
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
