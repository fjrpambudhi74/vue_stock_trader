<template>
  <div class="col-sm-6 col-md-6 mt-5">
    <div class="card text-white bg-card">
      <div class="card-header">
        {{ stock.name }}
        <small>(Price : $ {{ stock.price }} | Quantity : {{stock.quantity}} )</small>
      </div>
      <div class="card-body">
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            min="0"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-warning"
              type="button"
              @click="sellStocks"
              :disabled="limitQuantity"
            >{{ limitQuantity ? 'Exceed' : 'Sell' }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    limitQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({
      sellOrder: "sellStocks",
    }),
    sellStocks() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log(order);
      this.sellOrder(order);
      this.quantity = 0;
    },
  },
};
</script>

<style  scoped>
.bg-card {
  background: #706381;
}
</style>

