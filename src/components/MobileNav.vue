<template>
    <div>
        <v-btn fab small text :to="{ name: 'login' }" class="white--text hidden-sm-and-up">
            <v-icon>account_circle</v-icon>
        </v-btn>
        
        <v-btn fab small text :to="{ name: 'cart' }" class="white--text hidden-sm-and-up">
            <v-badge
                :content="getItems.length"
                :value="getItems.length > 0"
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
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('cart', [ 'getItems' ])
    }
}
</script>

<style lang="scss" scoped>

</style>