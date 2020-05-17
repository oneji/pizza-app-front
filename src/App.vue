<template>
    <v-app>
        <transition name="slide-x-transition" mode="out-in">
            <router-view />
        </transition>

        <Snackbar />
    </v-app>
</template>

<script>
    import Snackbar from './components/Snackbar'

    export default {
        name: 'App',
        components: {
            Snackbar
        }
    };
</script>

<style lang="css">
    @media (min-width: 1904px) {
        .container {
            max-width: 1280px !important;
        }
    }
</style>