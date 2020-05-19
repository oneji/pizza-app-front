<template>
    <v-list two-line>
        <OrderListItem 
            v-for="item in items" 
            :key="item.id"
            :item="item"
            @show-details="showOrderDetails" />
    </v-list>
</template>

<script>
    import OrderListItem from './OrderListItem'

    export default {
        props: {
            items: Array
        },
        components: {
            OrderListItem
        },
        data() {
            return {
                showDetails: false
            }
        },
        methods: {
            showOrderDetails(orderItem) {
                this.$emit('show-details', orderItem);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>