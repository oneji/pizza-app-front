<template>
    <div class="login-page-container">
        <v-row>
            <v-col sm="6" md="6" lg="4" xl="4" offset-sm="3" offset-md="3" offset-lg="4" offset-xl="4">
                <LoginForm @login="handleLogin" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import { mapActions } from 'vuex';

export default {
    components: {
        LoginForm
    },
    methods: {
        ...mapActions('auth', [ 'login' ]),
        handleLogin(credentials) {
            this.login(credentials);
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-page-container {
        height: calc(100vh - 140px);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-position: center center;
    }
</style>