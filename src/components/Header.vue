<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-nav p3">
    <router-link to="/">
      <a class="navbar-brand text-warning logo">Stock Trader</a>
    </router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portofolio">
          <li class="nav-item">
            <a class="nav-link text-light">My Stocks</a>
          </li>
        </router-link>
        <router-link to="/stocks">
          <li class="nav-item">
            <a class="nav-link text-light">Stocks</a>
          </li>
        </router-link>
      </ul>
      <ul class="navbar-nav navbar-right">
        <li class="nav-item">
          <a class="nav-link text-light" href="#" @click="endDay">End Day</a>
        </li>

        <li class="nav-item funds text-light">Balance: {{ funds | currency }}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions(["randomStock"]),
    endDay() {
      this.randomStock();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital@1&display=swap");

.bg-nav {
  background: #56556e;

  /* background: #726a95; */
}

.navbar {
  padding-left: 3em;
  padding-right: 3em;
}

.funds {
  margin-top: 7px;
  margin-left: 7px;
}

.logo {
  font-family: "Rubik", sans-serif;
  font-size: 28px;
}

.navbar-nav {
  margin-top: 5px;
  margin-left: 10px;
}
</style>