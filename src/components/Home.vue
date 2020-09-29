<template>
  <div>
    <div>
      <img class="hero" src="@/assets/img/rocket_launch__two_color.png" />
    </div>
    <div class="heading">
      <div class="v-border"></div>
      <h1
        class="font-weight-bold text-warning h-1 animate__animated animate__bounce"
      >Become Trader Now</h1>
      <h2 class="font-weight-bold">Instant access, anytime and anywhere</h2>
      <h5 class="mt-3">Invest in the most popular startup assets around the world</h5>
      <router-link to="/stocks">
        <button class="btn btn-warning mr-3 mt-4">Trade Now</button>
      </router-link>
      <router-link to="/portofolio">
        <button class="btn btn-outline-warning mt-4">View Portofolio</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.hero {
  position: absolute;
  left: 45%;
  top: -10%;
  z-index: -1;
  width: 50%;
  opacity: 60%;
}

.heading {
  margin-top: 80px;
  padding: 90px;
  z-index: 0;
  animated: bounce;
  animation-duration: 2s;
}

.v-border {
  border-left: 7px solid #fddb3a;
  height: 300px;
  position: absolute;
  left: 6%;
  margin-left: -3px;
  top: 17%;
}

.h-1 {
  font-size: 48px;
  margin-bottom: 20px;
}
</style>


