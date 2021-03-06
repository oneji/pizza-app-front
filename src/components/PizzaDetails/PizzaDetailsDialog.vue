<template>
    <v-dialog v-model="show" width="700px" persistent>
        <v-card>
            <v-card-text class="py-6">
                <v-row>
                    <PizzaDetailsCloseBtn @close="$emit('close')" />

                    <v-col cols="12" sm="12" md="6" lg="6">
                        <PizzaDetailsImg :src="pizza.image" />
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
                                <v-btn 
                                    block 
                                    color="success" 
                                    @click="addToCart"
                                    class="add-btn"
                                >
                                    Add to cart
                                </v-btn>
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
import { mapGetters } from 'vuex'

export default {
    props: {
        show: Boolean,
        pizza: {
            type: Object,
            default: () => {
                return {
                    image: null,
                    name: ''
                }
            }
        }
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
        ...mapGetters({
            'currentCurrency': 'cart/getCurrency',
            'sizes': 'pizzas/getSizes',
        })
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', {
                sizeId: this.size.id,
                pizzaId: this.pizza.id,
                quantity: 1
            });
        },
        handleSizeChange(size) {
            this.size = size;
            
            this.pizza.pizza_sizes.map(s => {
                if(s.id === size.id) {
                    const currencyIcon = this.currentCurrency === 'usd' ? ' $' : ' €';
                    this.price = s.pivot['price_' + this.currentCurrency] + currencyIcon;
                }
            });
        }
    },
    watch: {
        pizza(newVal, oldVal) {
            if(newVal.pizza_sizes !== undefined) {
                const currencyIcon = this.currentCurrency === 'usd' ? ' $' : ' €';
                this.price = newVal.pizza_sizes[0].pivot['price_' + this.currentCurrency] + currencyIcon;
                this.size = newVal.pizza_sizes[0];
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>