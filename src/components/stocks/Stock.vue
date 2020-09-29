<template>
  <div class="col-sm-6 col-md-6 mt-5">
    <div class="card text-white bg-card">
      <div class="card-header">
        {{ stock.name }}
        <small>(Price : {{ stock.price | currency }} )</small>
      </div>
      <div class="card-body">
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            min="0"
            :class="{danger: limitFunds}"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-warning"
              type="button"
              @click="buyStock"
              :disabled="limitFunds"
            >{{ limitFunds ? 'Limit Funds' : 'Buy' }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    limitFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}

.bg-card {
  background: #56556e;
}
</style>

