<template>
    <v-list two-line>
        <template v-for="item in items">
            <CartItem
                :item="item" 
                :key="item.item_id"
                @delete="handleDeleteItem"
                @minus="handleMinus"
                @plus="handlePlus" />
        </template>
    </v-list>
</template>

<script>
    import CartItem from './CartItem'

    export default {
        props: {
            items: Array
        },
        components: {
            CartItem
        },
        methods: {
            handleDeleteItem(itemId) {
                this.$store.dispatch('cart/deleteItem', itemId);
            },
            handlePlus(itemId) {
                this.$store.dispatch('cart/plusItem', itemId);
            },
            handleMinus(itemId) {
                this.$store.dispatch('cart/minusItem', itemId);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cart-item {
        border-bottom: 1px solid #ddd;
    }
</style>