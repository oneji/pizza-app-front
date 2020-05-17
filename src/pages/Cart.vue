<template>
    <div>
        <v-row>
            <v-col>
                <h1>Cart</h1>
            </v-col>
        </v-row>

        <v-row v-if="cart.length === 0">
            <v-col>
                <v-alert
                    text
                    outlined
                    color="deep-orange"
                    transition="scale-transition"
                >
                    No items added to the cart yet.
                </v-alert>
            </v-col>
        </v-row>

        <v-row v-else>
            <v-col>
                <CartItemsList :items="cart" />
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-btn :to="{ name: 'home' }" color="primary">Back to menu</v-btn>
            </v-col>
            <v-col class="d-flex justify-end">
                <v-btn color="success">Order</v-btn>
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