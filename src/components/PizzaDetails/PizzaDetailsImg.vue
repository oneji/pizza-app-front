<template>
    <div class="pizza-img">
        <img :src="pizzaImg" alt="Pizza img">
    </div>
</template>

<script>
    export default {
        props: {
            src: String
        },
        computed: {
            pizzaImg() {
                if(this.src !== null) {
                    return process.env.VUE_APP_ASSETS_URL + '/' + this.src;
                } else {
                    return require('@/assets/img/no-pizza.png')
                }
            },
        },
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