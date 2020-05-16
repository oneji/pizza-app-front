<template>
    <v-dialog v-model="show" width="700px" persistent>
        <v-card>
            <v-card-text class="py-6">
                <v-row>
                    <PizzaDetailsCloseBtn @close="$emit('close')" />

                    <v-col cols="12" sm="12" md="6" lg="6">
                        <PizzaDetailsImg src="@/assets/pizza.jpg" />
                    </v-col>

                    <v-col cols="12" sm="12" md="6" lg="6">
                        <div class="pizza-details">
                            <PizzaDetailsHeader
                                :pizzaName="pizza.name"
                                :size-caption="size.name" />

                            <PizzaDetailsDesc :text="pizza.description" />

                            <PizzaDetailsSizeSelect 
                                :items="sizes"
                                @change="handleSizeChange" />
                            
                            <PizzaDetailsPrice :price="price" />

                            <div class="pizza-details--add-btn mt-3">
                                <v-btn block color="success" @click="addToCart">Add to cart</v-btn>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import PizzaDetailsCloseBtn from './PizzaDetailsCloseBtn'
    import PizzaDetailsImg from './PizzaDetailsImg'
    import PizzaDetailsHeader from './PizzaDetailsHeader'
    import PizzaDetailsDesc from './PizzaDetailsDesc'
    import PizzaDetailsSizeSelect from './PizzaDetailsSizeSelect'
    import PizzaDetailsPrice from './PizzaDetailsPrice'

    export default {
        props: {
            show: Boolean
        },
        components: {
            PizzaDetailsCloseBtn,
            PizzaDetailsImg,
            PizzaDetailsHeader,
            PizzaDetailsDesc,
            PizzaDetailsSizeSelect,
            PizzaDetailsPrice
        },
        data() {
            return {
                size: {
                    id: null,
                    name: null
                },
                price: null
            }
        },
        computed: {
            sizes() {
                return this.$store.getters['pizzas/getSizes'];
            },
            pizza() {
                return this.$store.getters['pizzas/getDetails'];
            },
        },
        methods: {
            addToCart() {
                this.$emit('add-to-cart', {
                    sizeId: this.size.id,
                    pizzaId: this.pizza.id
                });
            },
            handleSizeChange(size) {
                this.size = size;
                
                this.pizza.pizza_sizes.map(s => {
                    if(s.id === size.id) {
                        this.price = s.pivot.price_usd + ' $';
                    }
                });
            }
        },
        watch: {
            pizza(newVal, oldVal) {
                if(newVal.pizza_sizes !== undefined) {
                    this.price = newVal.pizza_sizes[0].pivot['price_usd'] + ' $';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    

    .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 999;
        background-color: rgba(255, 255, 255, .8);
    }
</style>