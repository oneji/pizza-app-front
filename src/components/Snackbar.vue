<template>
    <v-snackbar 
        :timeout="3000"
        :color="getSnackbar.color"
        v-model="getSnackbar.active"
        top>
        {{ getSnackbar.text }}
    </v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('cart', [ 'getSnackbar' ])
    }
}
</script>

<style lang="scss" scoped>

</style>