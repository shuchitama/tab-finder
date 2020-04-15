<template>
  <div class="home">
    <Header />
    
    <Songlist />
  </div>
</template>

<script>
import Songlist from "@/components/Songlist.vue";

export default {
  name: "Home",
  components: {
    Songlist
  }
};
</script>
