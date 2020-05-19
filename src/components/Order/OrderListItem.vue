<template>
    <v-list-item class="order-list-item">
        <v-list-item-avatar>
            <v-icon class="blue white--text">assignment</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title>Order №{{ item.id }}</v-list-item-title>
            <v-list-item-subtitle>Date: {{ item.created_at | moment("MMMM Do, YYYY") }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
            <v-btn fab small text color="primary" @click="$emit('show-details', item)">
                <v-icon>visibility</v-icon>
            </v-btn>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
    export default {
        props: {
            item: Object
        }
    }
</script>

<style lang="scss" scoped>
    .order-list-item {
        border-bottom: 1px solid #ddd;
    }
</style>