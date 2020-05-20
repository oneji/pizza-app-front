<template>
    <v-dialog v-model="show" width="500px" persistent>
        <v-form ref="form" lazy-validation @submit.prevent="handleOrder">
            <v-card>
                <v-card-title>
                    <span class="headline">Order details</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field
                                    v-model="deliveryAddress"
                                    name="delivery_address"
                                    label="Delivery address *"
                                    filled
                                    dense
                                    hide-details
                                    :rules="addressRules"
                                    required>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field
                                    v-model="contacts"
                                    name="contacts"
                                    label="Contacts *"
                                    filled
                                    dense
                                    hide-details
                                    :rules="contactsRules"
                                    required>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-textarea
                                    v-model="comment"
                                    name="comment"
                                    filled
                                    label="Order comment"
                                    hide-details
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="$emit('close')">Close</v-btn>
                    <v-btn color="blue darken-1" text type="submit" :loading="loading">Order</v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    props: {
        show: Boolean
    },
    computed: {
        ...mapGetters({
            'currentCurrency': 'cart/getCurrency',
            'totalPrice': 'cart/totalPrice',
            'isAuth': 'auth/isAuthenticated',
            'user': 'auth/getUser'
        })
    },
    data() {
        return {
            deliveryAddress: '',
            contacts: '',
            comment: '',

            loading: false,
            addressRules: [
                v => !!v || 'Address is required',
            ],
            contactsRules: [
                v => !!v || 'Contacts is required',
            ],
        }
    },
    methods: {
        ...mapActions('cart', ['order']),
        handleOrder() {
            let valid = this.$refs.form.validate();

            if(valid) {
                this.loading = true;
                const orderItems = {
                    total_price_usd: this.totalPrice.usd,
                    total_price_euro: this.totalPrice.euro,
                    delivery_address: this.deliveryAddress,
                    contacts: this.contacts,
                    comment: this.comment,
                    user_id: this.isAuth ? this.user.id : null,
                    orderItems: JSON.parse(localStorage.getItem('p_cart')) || []
                }

                console.log(orderItems)

                this.order(orderItems)
                    .then(() => {
                        this.$emit('close');
                        this.loading = false;
                        this.deliveryAddress = '';
                        this.contacts = '';
                        this.comment = '';
                    });
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>