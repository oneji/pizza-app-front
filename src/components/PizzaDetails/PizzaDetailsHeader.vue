<template>
    <div class="pizza-details--title">
        <h2>{{ pizzaName }}</h2>
        <span>{{ sizeCaption }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            pizzaName: String,
            sizeCaption: {
                type: String,
                default: '...'
            }
        }
    }
</script>