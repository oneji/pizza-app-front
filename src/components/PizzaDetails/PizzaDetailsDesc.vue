<template>
    <div class="pizza-details--description my-4">
        <v-alert dense text color="primary">
            {{ text }}
        </v-alert>
    </div>
</template>

<script>
    export default {
        props: {
            text: String
        }
    }
</script>

<style lang="scss" scoped>

</style>