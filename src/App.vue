<template>
  <div>
    <Header />
    <div>
      <div class="col-md-12">
        <transition enter-active-class="animated fadeIn">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
body {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  background-color: #f4f4f4;
}
</style>
