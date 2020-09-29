<template>
  <div>
    <div class="container">
      <div class="row child">
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
      </div>
    </div>
  </div>
</template>
<script>
import Stock from "./Stock";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortofolio",
    }),
  },
  components: {
    appStock: Stock,
  },
};
</script>
