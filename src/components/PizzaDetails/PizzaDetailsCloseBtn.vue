<template>
    <div class="close-btn-wrapper">
        <v-btn icon color="primary" class="close-btn" @click="$emit('close')">
            <v-icon>close</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .close-btn-wrapper {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>