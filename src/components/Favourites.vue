<template>
  <div class="favs">
    <div id="separation">
      <span></span>
      <h3>MY FAVOURITE SONGS</h3>
      <span></span>
    </div>
    <table>
      <tr>
        <th style="width:260px">SONG</th>
        <th style="width:260px">ARTIST</th>
        <th style="width:230px">CHORDS</th>
        <th style="width:100px"></th>
      </tr>
      <tr>
        <td>
          <div class="title" v-bind:key="song.id" v-for="song in favList">
            <a v-bind:href="song.url" target="_blank">
              <p class="title">{{ song.title }}</p>
            </a>
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
        <td>
          <div class="toggleFav" v-bind:key="song.id" v-for="song in favList">
            <div @click="toggleFavourite(song.id)">
              <b-icon v-if="isFave(song.id)" icon="heart-fill"></b-icon>
              <b-icon v-else icon="heart"></b-icon>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Favourites",
  props: ["favList"],
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
        .delete("http://localhost:3001/api/usersongs", { data: {songid: id} })
        .catch(error => console.log(error));
      this.$props.favList = this.$props.favList.filter(el => el !== id);
    },
    isFave(id) {
      return this.allFavourites.includes(id);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

h3 {
  font-family: Oswald;
  font-size: 20px;
  letter-spacing: 1px;
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
  text-transform: uppercase;
  height: 40px;
  font-family: Oswald;
  color: #233d32;
}

.chords {
  color: #4a4a4a;
  height: 40px;
}

.artist {
  height: 40px;
}

.toggleFav:hover {
  cursor: pointer;
}
</style>
