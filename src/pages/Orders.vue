<template>
    <div>
        <Loading :show="loading" />
        <v-row>
            <v-col>
                <h1>Orders</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <OrdersList 
                    :items="orders"
                    @show-details="showOrderDetails" />
            </v-col>
        </v-row>

        <OrderDetailsDialog 
            :show="showDetails"
            :item="orderDetailsObj"
            @close="showDetails = false" />
    </div>
</template>

<script>
    import Loading from '@/components/Loading'
    import OrdersList from '@/components/Order/OrdersList'
    import OrderDetailsDialog from '@/components/Order/OrderDetailsDialog'

    export default {
        components: {
            Loading,
            OrdersList,
            OrderDetailsDialog
        },
        computed: {
            orders() {
                return this.$store.getters['orders/getOrders'];
            }
        },
        data() {
            return {
                loading: true,
                showDetails: false,
                orderDetailsObj: {}
            }
        },
        methods: {
            showOrderDetails(orderItem) {
                this.orderDetailsObj = orderItem;
                this.showDetails = true; 
            }
        },
        created() {
            this.loading = true;
            this.$store.dispatch('orders/getOrders')
                .then(() => this.loading = false);
        }
    }
</script>

<style lang="scss" scoped>

</style>