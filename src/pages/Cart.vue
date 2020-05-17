<template>
    <div>
        <v-row>
            <v-col>
                <h1>Cart</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <CartItemsList :items="cart" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import CartItemsList from '@/components/Cart/CartItemsList'

    export default {
        components: {
            CartItemsList
        },
        computed: {
            cart() {
                return this.$store.getters['cart/getItems'];
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>