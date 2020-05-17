<template>
    <div class="quantity-selector">
        <v-btn fab small text color="primary" @click="$emit('minus')">
            <v-icon>remove</v-icon>
        </v-btn>
        <div class="quantity-selector--text">{{ count }}</div>
        <v-btn fab small text color="primary" @click="$emit('plus')">
            <v-icon>add</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        props: {
            count: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    .quantity-selector {
        display: flex;
        justify-content: center;
        align-items: center;

        &--text {
            margin: 0 10px;
            font-size: 18px;
            font-weight: 500;
        }
    }
</style>