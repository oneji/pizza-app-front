<template>
    <div class="loading-block" v-if="show">
        <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
        ></v-progress-circular>
    </div>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            }
        }
    }
</script>


<style lang="scss" scoped>
    .loading-block {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 90vh;
        top: 0;
        left: 0;
        z-index: 1;
    }
</style>