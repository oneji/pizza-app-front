<template>
    <v-dialog v-model="show" width="700px" persistent>
        <v-card class="order-details">
            <v-card-text class="py-6">
                <v-row>
                    <OrderDetailsCloseBtn @close="$emit('close')" />

                    <v-col cols="12" sm="12" md="6" lg="6">
                        <div class="order-items">
                            <v-list two-line subheader dense>
                                <v-subheader>Order items</v-subheader>

                                <v-list-item class="order-items--item" v-for="pizza in item.order_items" :key="pizza.id">
                                    <v-list-item-avatar class="order-items--item--image">
                                        <v-img :src="pizzaImg(pizza.image)"></v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title>{{ pizza.pizza_name }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ pizza.size_name }}</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                        <v-btn fab small text color="primary">{{ pizza.quantity }}</v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="12" md="6" lg="6">
                        <div class="order-details--body">
                            <v-list dense subheader>
                                <v-subheader>Order №{{ item.id }} details:</v-subheader>

                                <v-list-item-group color="primary">
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>attach_money</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>Total price USD: {{ item.total_price_usd }} $</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>euro</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>Total price Euro: {{ item.total_price_euro }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>where_to_vote</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>Delivery address: {{ item.delivery_address }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>perm_phone_msg</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>Contacts: {{ item.contacts }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>comment</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>Comment: {{ item.comment }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>today</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>Date: {{ item.created_at | moment("MMMM Do, YYYY") }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import OrderDetailsCloseBtn from './OrderDetailsCloseBtn'

    export default {
        props: {
            show: Boolean,
            item: Object
        },
        components: {
            OrderDetailsCloseBtn
        },
        methods: {
            pizzaImg(img) {
                if(img !== null) {
                    return process.env.VUE_APP_ASSETS_URL + '/' + img;
                } else {
                    return require('@/assets/img/no-pizza.png')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .order-items {
        &--item {
            &--image {
                margin-top: 0 !important;
                margin-bottom: 0 !important;
            }
        }
    }
    .order-details--body {
        border-left: 1px solid #ddd;
    }
</style>