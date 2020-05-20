<template>
    <div>
        <!-- <Loading :show="loading"/> -->
        <v-row>
            <v-col sm="8" md="9" lg="9">
                <Categories @change="getPizzaByCategory" />
            </v-col>
        </v-row>

        <v-row>
            <v-col v-for="pizza in getPizzas" :key="pizza.id" sm="6" md="3" lg="3">
                <Pizza 
                    :item="pizza"
                    :loading="PDloading"
                    @show-details="showPizzaDetails"
                />
            </v-col>
        </v-row>

        <PizzaDetailsDialog
            :pizza="pizza"
            :show="showPD"
            @close="showPD = false"
            @add-to-cart="addPizzaToCart" />
    </div>
</template>

<script>
import Loading from '@/components/Loading'
import Categories from '@/components/Pizzas/Categories'
import Pizza from '@/components/Pizzas/Pizza'
import PizzaDetailsDialog from '@/components/PizzaDetails/PizzaDetailsDialog'
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        Loading,
        Categories,
        Pizza,
        PizzaDetailsDialog
    },
    computed: {
        ...mapGetters({
            'getPizzas': 'pizzas/getPizzas'
        })
    },
    data() {
        return {
            loading: false,
            showPD: false,
            PDloading: null,
            pizza: {
                image: null,
                name: '...',
                description: null
            }
        }
    },
    methods: {
        ...mapActions({
            'addToCart': 'cart/addToCart',
            'getByCategory': 'pizzas/getByCategory',
            'getById': 'pizzas/getById',
            'getAllPizzas': 'pizzas/getAll'
        }),
        addPizzaToCart(data) {
            this.addToCart(data).then(() => this.showPD = false);
        },
        getPizzaByCategory(categoryId) {
            this.loading = true;
            this.getByCategory(categoryId).then(() => this.loading = false);
        },
        showPizzaDetails(pizzaId) {
            this.PDloading = pizzaId;
            this.getById(pizzaId).then((pizza) => {
                this.pizza = pizza;
                this.showPD = true;
                this.PDloading = null;
            });
        }
    },
    mounted() {
        this.getAllPizzas();
    }
}
</script>

<style>

</style>