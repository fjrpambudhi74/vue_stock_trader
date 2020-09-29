const state = {
    funds: 10000,
    stocks: [] /*This data array refers to portofolio stocks */
};

const mutations = {
    'BUY_STOCKS'(state, {
        stockId,
        quantity,
        stockPrice
    }) {
        const record = state.stocks.find(element => element.id == stockId); /*checking & find data in array with condition */
        /* And if the record do have or match stock in array then update or increase quantity  */
        if (record) {
            record.quantity += quantity;

            /* And else the record is empty in stock array then push data to new array to the portofolio page */
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },

    'SELL_STOCKS'(state, {
        stockId,
        quantity,
        stockPrice
    }) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    }
};

const actions = {
    sellStocks({
        commit
    }, order) {
        commit('SELL_STOCKS', order);
    }
}

const getters = {
    stockPortofolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state) {
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}