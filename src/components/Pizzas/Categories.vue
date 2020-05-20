<template>
    <v-chip-group 
        mandatory 
        active-class="primary--text"
        show-arrows
        next-icon="arrow_forward_ios"
        prev-icon="arrow_back_ios"
    >
        <v-chip @click="$emit('change', null)">All</v-chip>
        <v-chip
            v-for="cat in getCategories" 
            :key="cat.id"
            @click="$emit('change', cat.id)"
        >{{ cat.name }}</v-chip>
    </v-chip-group>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters('pizzas', [ 'getCategories' ])
        },
        data() {
            return {
                chosen: 0
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>