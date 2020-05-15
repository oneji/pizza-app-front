<template>
    <div>
        <Loading :show="loading"/>
        <v-row>
            <v-col xs="12" sm="8" md="9" lg="9">
                <Categories @change="getByCategory" />
            </v-col>

            <v-col xs="12" sm="4" md="3" lg="3">
                <v-select
                    :items="sortBy"
                    filled
                    dense
                    label="Sort by"
                    hide-details
                ></v-select>
            </v-col>
        </v-row>
        <v-row v-if="!loading">
            <v-col v-for="pizza in pizzas" :key="pizza.id" xs="6" sm="6" md="3" lg="3">
                <Pizza 
                    :item="pizza"
                    @add-to-cart="addPizzaToCart" 
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import Loading from '@/components/Loading'
    import Categories from '@/components/Pizzas/Categories'
    import Pizza from '@/components/Pizza'

    export default {
        components: {
            Loading,
            Categories,
            Pizza
        },
        computed: {
            pizzas() {
                return this.$store.getters['pizzas/getPizzas'];
            }
        },
        data() {
            return {
                loading: true,
                amenities: 0,
                sortBy: [ 'Name', 'Price' ]
            }
        },
        methods: {
            addPizzaToCart(itemId) {
                console.log('[addPizzaToCart]', itemId);
            },

            getByCategory(categoryId) {
                this.loading = true;
                this.$store.dispatch('pizzas/getByCategory', categoryId)
                    .then(() => this.loading = false);
            }
        },
        created() {
            this.$store.dispatch('pizzas/getPizzas').then(() => {
                this.loading = false;
            });
        }
    }
</script>

<style>

</style>