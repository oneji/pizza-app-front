<template>
    <v-snackbar 
        :timeout="3000"
        :color="snackbar.color"
        v-model="snackbar.active">
        {{ snackbar.text }}
    </v-snackbar>
</template>

<script>
    export default {
        computed: {
            snackbar() {
                return this.$store.getters['cart/getSnackbar'];
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>