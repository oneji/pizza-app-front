<template>
    <v-list-item :key="item.pizza.id" class="cart-item">
        <v-list-item-avatar>
            <v-img :src="pizzaImg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title v-html="item.pizza.name"></v-list-item-title>
            <v-list-item-subtitle>{{ getPizzaSize }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action class="cart-item--actions">
            <QuantitySelector
                :count="item.quantity"
                @minus="$emit('minus', item.id)"
                @plus="$emit('plus', item.id)"
            />

            <div class="cart-item--total-price">{{ item['total_price_' + currentCurrency] }} {{ currentCurrency === 'usd' ? ' $' : ' €' }}</div>

            <v-btn fab small text color="error" @click="$emit('delete', item.id)">
                <v-icon>delete</v-icon>
            </v-btn>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
    import QuantitySelector from './QuantitySelector'

    export default {
        props: {
            item:  Object
        },
        components: {
            QuantitySelector
        },
        computed: {
            currentCurrency() {
                return this.$store.getters['cart/getCurrency'];
            },

            pizzaImg() {
                if(this.item.pizza.image !== null) {
                    return process.env.VUE_APP_ASSETS_URL + '/' + this.item.pizza.image;
                } else {
                    return require('@/assets/img/no-pizza.png')
                }
            },

            getPizzaSize() {
                let pizzaSize = '...';
                this.item.pizza.pizza_sizes.map(size => {
                    if(size.id === this.item.pizza_size_id) {
                        pizzaSize = size.name;
                    }
                });

                return pizzaSize;
            }
        },

        mounted() {
            console.log(this.item)
        }
    }
</script>

<style lang="scss" scoped>
    .cart-item {
        &--actions {
            flex-direction: row;
            align-items: center;
        }

        &--total-price {
            padding: 0 15px;
            margin: 0 15px;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
            height: 80%;
            display: flex;
            align-items: center;
            font-weight: 500;
        }
    }
</style>