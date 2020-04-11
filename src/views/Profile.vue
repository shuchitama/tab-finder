<template>
  <div class="profile">
    <h2>This is the Profile page!</h2>
    <SideBar />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";

export default {
  name: "Profile",
  components: {
    SideBar
  }
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
