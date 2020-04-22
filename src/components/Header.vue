<template>
  <header class="header">
    <div id="nav" class="layer">
      <section id="tab-finder">
        <span id="tab">TAB</span>
        <span id="finder">FINDER</span>
      </section>
      <section id="find-tabs">
        <span>Find tabs based on the chords you know!</span>
      </section>
      <section id="links">
        <router-link to="/">Home</router-link> |
        <router-link to="/library">Library</router-link> |
        <router-link to="/profile">Profile</router-link> |
        <router-link to="/about">About</router-link>
      </section>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

#nav {
  display: flex;
  flex-direction: column;
  height: 350px;
  object-fit: contain;
  background-image: url("../../public/615@2x.png");
  background-color: black;
}

#nav a.router-link-exact-active {
  color: #ffe1b1;
}

#tab-finder {
  object-fit: contain;
  margin-top: 90px;
  margin-left: 267px;
  margin-right: 266px;
  font-family: Oswald;
  font-size: 60px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.67px;
  color: #ffe1b1;
}

#tab {
  font-weight: 300;
  color: #ffffff;
}

#find-tabs {
  font-family: Oswald;
  font-size: 22px;
  margin-left: 267px;
  margin-right: 266px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.88px;
  text-align: center;
  color: #ffffff;
}

#links {
  height: 50px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  letter-spacing: 0.75px;
  text-align: center;
  color: #71ad90;
  margin-top: 93px;
  padding-top: 5px;
  background-blend-mode: multiply;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}
</style>
