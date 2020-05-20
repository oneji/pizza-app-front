<template>
    <div>
        <Loading :show="loading" />
        <v-row>
            <v-col>
                <h1>Cart</h1>
            </v-col>
        </v-row>

        <CartCostAlert v-if="getItems.length > 0" />
        
        <v-row v-if="getItems.length === 0">
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

        <v-row v-if="!loading && getItems.length > 0">
            <v-col cols="12" sm="12" md="12" lg="12">
                <CartItemsList :items="getItems" />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" class="text-right mb-5">
                <h2>Total price (inc. DC): {{ totalPrice[getCurrency] }} {{ getCurrency === 'usd' ? ' $' : ' €' }}</h2>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-btn :to="{ name: 'home' }" color="primary">Back to menu</v-btn>
            </v-col>
            <v-col class="d-flex justify-end">
                <v-btn 
                    color="success" 
                    @click="orderDialog = true"
                    v-if="getItems.length > 0">Order</v-btn>
            </v-col>
        </v-row>

        <OrderDialog 
            :show="orderDialog"
            @close="orderDialog = false" />
    </div>
</template>

<script>
    import Loading from '@/components/Loading'
    import CartCostAlert from '@/components/Cart/CartCostAlert'
    import CartItemsList from '@/components/Cart/CartItemsList'
    import OrderDialog from '@/components/Order/OrderDialog'

    import { mapGetters } from 'vuex'

    export default {
        components: {
            Loading,
            CartCostAlert,
            CartItemsList,
            OrderDialog
        },
        computed: {
            ...mapGetters('cart', [
                'getCurrency',
                'getItems',
                'totalPrice'
            ])
        },
        data() {
            return {
                loading: false,
                orderDialog: false
            }
        },
        methods: {
            getInfo() {
                let cartItems = JSON.parse(localStorage.getItem('p_cart')) || [];

                if(cartItems.length > 0) {
                    this.loading = true;
                    this.$store.dispatch('cart/getInfo', cartItems).then(() => { this.loading = false; })
                }
            }
        },
        mounted() {
            this.getInfo();
        }
    }
</script>

<style lang="scss" scoped>

</style>