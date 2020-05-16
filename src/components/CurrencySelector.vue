<template>
    <v-menu offset-y>
        <template v-slot:activator="{ on }">
            
            <v-btn text dark v-on="on">
                <v-icon class="mr-2">credit_card</v-icon>
                {{ currentCurrency }}
            </v-btn>
        </template>
        <v-list>
            <v-list-item 
                v-for="item in items" 
                :key="item.value" 
                @click="changeCurrency(item.value)"
                :disabled="currentCurrency === item.value"
            >
                <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        computed: {
            currentCurrency() {
                return this.$store.getters['cart/getCurrency'];
            },
        },
        data() {
            return {
                items: [
                    { text : 'USD $', value: 'usd', },
                    { text: 'Euro €', value: 'euro', }
                ]
            }
        },
        methods: {
            changeCurrency(currency) {
                this.$store.dispatch('cart/setCurrency', currency);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>