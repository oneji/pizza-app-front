<template>
    <v-menu offset-y>
        <template v-slot:activator="{ on }">
            <v-btn text dark v-on="on" class="hidden-xs-only mr-2">
                <v-icon class="mr-2">credit_card</v-icon>
                {{ getCurrency }}
            </v-btn>
            <v-btn text dark v-on="on" class="hidden-sm-and-up">
                <v-icon>credit_card</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item 
                v-for="item in items" 
                :key="item.value" 
                @click="changeCurrency(item.value)"
                :disabled="getCurrency === item.value"
            >
                <v-list-item-title class="text-center">{{ item.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters('cart', [ 'getCurrency' ])
        },
        data() {
            return {
                items: [
                    { text : 'USD', value: 'usd', },
                    { text: 'Euro', value: 'euro', }
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