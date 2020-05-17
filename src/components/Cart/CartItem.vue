<template>
    <v-list-item :key="item.pizza.id" class="cart-item">
        <v-list-item-avatar>
            <v-img src="@/assets/pizza.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title v-html="item.pizza.name"></v-list-item-title>
            <v-list-item-subtitle v-html="item.pizza.name"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action class="cart-item--actions">
            <QuantitySelector
                :count="item.quantity"
                @minus="$emit('minus')"
                @plus="$emit('plus')"
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
            }
        },
        mounted() {
            console.log(this.item);
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