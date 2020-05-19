export default {
    getCurrency(state) {
        return state.currency;
    },

    getItems(state) {
        return state.items;
    },

    getSnackbar(state) {
        return state.snackbar;
    },

    totalPrice(state) {
        let total = {
            usd: 0,
            euro: 0
        };

        state.items.map(item => {
            total.usd += item.total_price_usd;
            total.euro += item.total_price_euro;
        });

        return total;
    }
}