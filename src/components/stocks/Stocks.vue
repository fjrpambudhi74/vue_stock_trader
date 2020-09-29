<template>
  <div class="container">
    <div class="row">
      <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    appStock: Stock,
  },
  computed: {
    ...mapGetters(["stocks"]),

    // manually calling getters from store
    // stocks() {
    //   return this.$store.getters.stocks;
    // },
  },
};
</script>

