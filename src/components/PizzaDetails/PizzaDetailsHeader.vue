<template>
    <div class="pizza-details--title">
        <h2>{{ pizzaName }}</h2>
        <span>{{ sizeCaption || firstSize }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            pizzaName: String,
            sizeCaption: String
        },
        computed: {
            firstSize() {
                return this.$store.getters['pizzas/getSizes'][0].name;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>