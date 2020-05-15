<template>
    <v-app-bar app color="primary" dark dense>
        <v-toolbar-title>Pizza app</v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- Control buttons -->
        <v-btn text class="white--text" :to="{ name: 'login' }">
            <v-icon class="mr-2">account_circle</v-icon>
            <span>Login</span>
        </v-btn>

        <v-btn text class="white--text" :to="{ name: 'cart' }">
            <v-badge
                :content="1"
                :value="false"
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
    
    export default {
        methods: {
            // logout() {
            //     console.log('[auth] Logout');
            //     this.$store.dispatch('auth/logout');
            // }
        }
    }
</script>

<style lang="scss" scoped>

</style>