<template>
    <v-list two-line>
        <template v-for="item in items">
            <CartItem 
                :item="item" 
                :key="item.id"
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
                console.log('delete', itemId);

                this.$store.dispatch('cart/deleteItem', itemId);
            },
            handlePlus(itemId) {
                console.log('plus', itemId);
            },
            handleMinus(itemId) {
                console.log('minus', itemId);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cart-item {
        border-bottom: 1px solid #ddd;
    }
</style>