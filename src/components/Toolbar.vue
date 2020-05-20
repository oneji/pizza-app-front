<template>
    <v-app-bar app color="primary" dark>
        <v-toolbar-title class="toolbar-title">
            <div class="toolbar-logo">
                <router-link :to="{ name: 'home' }">
                    <img src="@/assets/img/pizza-logo.png" alt="Pizza application logo">
                </router-link>
            </div>
            <span class="hidden-xs-only">Pizza app</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- Control buttons -->
        <CurrencySelector />
        
        <v-btn text class="white--text hidden-xs-only mr-2" v-if="!isAuth" :to="{ name: 'login' }">
            <v-icon class="mr-2">account_circle</v-icon>
            <span>Login</span>
        </v-btn>

        <v-btn text class="white--text hidden-xs-only mr-2" :to="{ name: 'cart' }">
            <v-badge
                :content="cart.length"
                :value="cart.length > 0"
                color="green"
                overlap
                left
            >
                
                <v-icon class="mr-2">shopping_cart</v-icon>
                <span>Cart</span>
            </v-badge>
        </v-btn>

        <MobileNav />

        <!-- User menu -->
        <UserMenu v-if="isAuth" />
    </v-app-bar>
</template>

<script>
import CurrencySelector from './CurrencySelector'
import MobileNav from './MobileNav'
import UserMenu from './UserMenu'
import { mapGetters } from 'vuex'
    
export default {
    components: {
        CurrencySelector,
        MobileNav,
        UserMenu
    },
    computed: {
        ...mapGetters({
            'cart': 'cart/getItems',
            'isAuth': 'auth/isAuthenticated'
        })
    },
}
</script>

<style lang="scss" scoped>
    .toolbar-title {
        display: flex;
        align-items: center;
    }

    .toolbar-logo {
        width: 60px;
        margin-right: 10px;

        a {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
            }
        }
    }
</style>