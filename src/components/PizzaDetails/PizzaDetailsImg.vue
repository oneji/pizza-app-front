<template>
    <div class="pizza-img">
        <img src="@/assets/pizza.jpg" alt="Pizza img">
    </div>
</template>

<script>
    export default {
        props: {
            src: String
        }
    }
</script>

<style lang="scss" scoped>
    .pizza-img {
        width: 100%;
        border-right: 1px solid #ddd;
        padding: 20px;

        img {
            width: inherit;
        }
    }
</style>