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
                    :items="getOrders"
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
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        Loading,
        OrdersList,
        OrderDetailsDialog
    },
    computed: {
        ...mapGetters('orders', [ 'getOrders' ])
    },
    data() {
        return {
            loading: true,
            showDetails: false,
            orderDetailsObj: {}
        }
    },
    methods: {
        ...mapActions('orders', [ 'get' ]),
        showOrderDetails(orderItem) {
            this.orderDetailsObj = orderItem;
            this.showDetails = true;
        },
        getAll() {
            this.loading = true;
            this.get().then(() => this.loading = false);
        }
    },
    created() {
        this.getAll();
    }
}
</script>

<style lang="scss" scoped>

</style>