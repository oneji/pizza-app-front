<template>
    <v-app-bar app color="primary" dark>
        <v-toolbar-title class="toolbar-title">
            <div class="toolbar-logo">
                <router-link :to="{ name: 'home' }">
                    <img src="@/assets/pizza-logo.png" alt="Pizza application logo">
                </router-link>
            </div>
            Pizza app
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- Control buttons -->
        <CurrencySelector />
        
        <v-btn text class="white--text" :to="{ name: 'login' }">
            <v-icon class="mr-2">account_circle</v-icon>
            <span>Login</span>
        </v-btn>

        <v-btn text class="white--text" :to="{ name: 'cart' }">
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
        
        <!-- <v-btn text class="white--text d-none d-sm-flex" @click="logout">
            <v-icon class="mr-2">exit_to_app</v-icon>
            <span>Выйти</span>
        </v-btn> -->
    </v-app-bar>
</template>

<script>
    import CurrencySelector from './CurrencySelector'
    
    export default {
        components: {
            CurrencySelector
        },
        computed: {
            cart() {
                return this.$store.getters['cart/getItems'];
            }
        },
        methods: {
            // logout() {
            //     console.log('[auth] Logout');
            //     this.$store.dispatch('auth/logout');
            // }
        }
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