<template>
  <header class="header">
    <div id="nav" class="layer">
      <section id="tab-finder">
        <span id="tab">TAB</span>
        <span id="finder">FINDER MOBILE</span>
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
  name: "HeaderMob"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

#nav {
  display: flex;
  height: 200px;
  flex-direction: column;
  background-image: url("../../public/615.png");
}

#nav a.router-link-exact-active {
  color: #ffe1b1;
}

#tab-finder {
  margin-top: 20px;
  font-family: Oswald;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 1.67px;
  color: #ffe1b1;
}

#tab {
  font-weight: 300;
  color: #ffffff;
}

#find-tabs {
  margin: 10px;
  font-family: Oswald;
  font-size: 15px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.88px;
  text-align: center;
  color: #ffffff;
}

#links {
  margin-top: 53px;
  height: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  letter-spacing: 0.75px;
  text-align: center;
  color: #71ad90;
  padding-top: 5px;
  background-blend-mode: multiply;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  );
}
</style>
