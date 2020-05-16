<template>
    <div class="pizza-details--size my-4">
        <v-select
            :items="items"
            filled
            label="Choose size"
            item-text="name"
            item-value="id"
            v-model="size"
            @change="$emit('change', size)"
            return-object
            hide-details
        ></v-select>
    </div>
</template>

<script>
    export default {
        props: {
            items: {
                type: Array,
                default: []
            }
        },
        data() {
           return {
               size: this.items[0]
           } 
        }
    }
</script>

<style lang="scss" scoped>

</style>