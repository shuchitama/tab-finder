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
      <div class="favourite" @click="toggleFavourite(song.id)">
        <b-icon
          v-if="isFave(song.id)"
          animation="fade"
          icon="heart-fill"
        ></b-icon>
        <b-icon v-else animation="fade" icon="heart"></b-icon>
      </div>
    </div>
  </article>
</template>

<script>
import axios from "axios";
export default {
  name: "song",
  props: ["song"],
  data() {
    return {
      allFavourites: []
    };
  },
  created() {
    axios.get("http://localhost:3001/api/usersongs").then(response => {
      this.allFavourites = response.data.map(el => el.song_id);
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
          .put("http://localhost:3001/api/usersongs", { userid: 1, songid: id })
          .catch(error => console.log(error));
        this.allFavourites.push(id);
      } else {
        alert("Please log in to add the song to your favourites!");
      }
    },
    deleteFav(id) {
      axios
        .delete("http://localhost:3001/api/usersongs", { songid: id })
        .catch(error => console.log(error));
      this.allFavourites = this.allFavourites.filter(el => el !== id);
    },
    isFave(id) {
      return this.allFavourites.includes(id);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

.song-card {
  width: 295px;
  height: 87px;
  background-color: #c9d3ce;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
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
  text-align: right;
  color: #889c91;
  cursor: pointer;
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
  width: 160px;
  height: 30px;
  font-family: inherit;
  font-size: 10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  letter-spacing: normal;
  color: #4a4a4a;
}
</style>
