<template>
    <div>
        <v-btn fab small text :to="{ name: 'login' }" class="white--text hidden-sm-and-up">
            <v-icon>account_circle</v-icon>
        </v-btn>
        
        <v-btn fab small text :to="{ name: 'cart' }" class="white--text hidden-sm-and-up">
            <v-badge
                :content="cart.length"
                :value="cart.length > 0"
                color="green"
                overlap
                left
            >
                
                <v-icon>shopping_cart</v-icon>
            </v-badge>
        </v-btn>
    </div>
</template>

<script>
    export default {
        computed: {
            cart() {
                return this.$store.getters['cart/getItems'];
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>