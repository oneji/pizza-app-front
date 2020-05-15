<template>
    <v-app>
        <transition name="slide-x-transition" mode="out-in">
            <router-view />
        </transition>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {

            }
        },
    };
</script>

<style lang="css">
    @media (min-width: 1904px) {
        .container {
            max-width: 1280px !important;
        }
    }
</style>