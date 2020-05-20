<template>
    <v-list-item class="cart-item">
        <v-list-item-avatar>
            <v-img :src="pizzaImg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle>{{ item.size_name }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action class="cart-item--actions">
            <QuantitySelector
                :count="item.quantity"
                @minus="$emit('minus', item.item_id)"
                @plus="$emit('plus', item.item_id)"
            />

            <div class="cart-item--total-price">{{ item['total_price_' + getCurrency] }} {{ getCurrency === 'usd' ? ' $' : ' €' }}</div>

            <v-btn fab small text color="error" @click="$emit('delete', item.item_id)">
                <v-icon>delete</v-icon>
            </v-btn>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
import QuantitySelector from './QuantitySelector'
import { mapGetters } from 'vuex';

export default {
    props: {
        item:  Object
    },
    components: {
        QuantitySelector
    },
    computed: {
        ...mapGetters('cart', [ 'getCurrency' ]),

        pizzaImg() {
            if(this.item.image !== null) {
                return process.env.VUE_APP_ASSETS_URL + '/' + this.item.image;
            } else {
                return require('@/assets/img/no-pizza.png')
            }
        },
    },
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