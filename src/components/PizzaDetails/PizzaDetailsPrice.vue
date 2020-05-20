<template>
    <div class="pizza-details--price my-4">
        <v-alert dense text color="primary">Total price: {{ price }}</v-alert>
    </div>
</template>

<script>
    export default {
        props: {
            price: [String, Number]
        }
    }
</script>