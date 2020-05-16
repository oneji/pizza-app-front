<template>
    <div class="close-btn">
        <v-btn icon color="primary" @click="$emit('close')">
            <v-icon>close</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .close-btn {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>