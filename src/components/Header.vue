<template>
  <header class="header">
    <div id="nav" srcset="img/615@2x.png 2x, img/615@3x.png 3x" class="layer">
      <container id="tab-finder">
        <span id="tab">TAB</span>
        <span id="finder">FINDER</span>
      </container>
      <container id="find-tabs">
        <span>Find tabs based on the chords you know!</span>
      </container>

      <container id="links">
        <router-link to="/">Home</router-link> |
        <router-link to="/library">Library</router-link> |
        <router-link to="/profile">Profile</router-link> |
        <router-link to="/about">About</router-link>
      </container>

    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap');

/* @media screen  */
#nav {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* width: auto; */
  height: 350px;
  object-fit: contain;
  background-image: url("../../public/615@2x.png");
  background-color: black;
}

#tab-finder {
  /* width: 235px;
  height: 74px; */
  object-fit: contain;
  margin-top: 90px;
  margin-left: 267px;
  margin-right: 266px;
  font-family: Oswald;
  font-size: 50px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.67px;
  /* text-align: center; */
  color: #ffe1b1;
}
#tab {
  font-weight: 300;
  color: #ffffff;
}

#find-tabs {
  /* width: 268px; */
  /* height: 16px; */
  font-family: Oswald;
  font-size: 22px;
  /* font-weight: bold; */
  /* margin-top: 10px; */
  margin-left: 267px;
  /* margin-bottom: 93px; */
  margin-right: 266px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.88px;
  text-align: center;
  color: #ffffff;
}

#links {
  /* width: 366px; */
  height: 50px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  /* font-weight: bold; */
  /* font-stretch: normal; */
  /* font-style: normal; */
  /* line-height: normal; */
  letter-spacing: 0.75px;
  text-align: center;
  color: #71ad90;
  width: 1500px;
  margin-top: 103px;
  padding-top: 5px;
  background-blend-mode: multiply;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}
</style>
