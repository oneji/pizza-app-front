<template>
    <div>
        <Loading :show="loading" />
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

        <v-row v-if="!loading">
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
    import Loading from '@/components/Loading'
    import CartItemsList from '@/components/Cart/CartItemsList'

    export default {
        components: {
            Loading,
            CartItemsList
        },
        computed: {
            cart() {
                return this.$store.getters['cart/getItems'];
            }
        },
        data() {
            return {
                loading: false
            }
        },
        mounted() {
            let cartItems = JSON.parse(localStorage.getItem('p_cart')) || [];
            
            if(cartItems.length > 0) {
            this.loading = true;
                this.$store.dispatch('cart/getInfo', cartItems)
                    .then(() => {
                        this.loading = false;
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>