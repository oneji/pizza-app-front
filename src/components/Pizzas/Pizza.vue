<template>
    <article class="pizza-item">
        <main>
            <div class="pizza-item--img">
                <img src="@/assets/pizza.jpg" :alt="item.name">
            </div>
            <h2 class="pizza-item--title">{{ item.name }}</h2>

            <div class="pizza-item--description" v-if="item.description !== null">
                <v-alert dense text color="primary" class="mb-0">
                    {{ item.description }}
                </v-alert>
            </div>
        </main>
        <footer class="pizza-item--footer">
            <div class="pizza-item--price">
                <span>st. {{ getMinPrice }} $</span>
            </div>

            <div class="pizza-item--add-btn">
                <v-btn 
                    color="primary" 
                    outlined 
                    @click="addToCart"
                    :loading="loading === item.id">Add to cart</v-btn>
            </div>
        </footer>
    </article>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true,
            },
            loading: {
                type: Number,
                default: false
            }
        },
        computed: {
            getMinPrice() {
                let minPriceObj = this.item.pizza_sizes.filter(size => {
                    return size.name.toLowerCase() === 'small'
                })[0];

                if(minPriceObj === undefined) return 0;
                
                else {
                    return minPriceObj.pivot.price_usd;
                }
            }
        },
        data: () => ({
            size: undefined
        }),
        methods: {
            addToCart() {
                this.$emit('show-details', this.item.id);
            },
        }
    }
</script>

<style lang="scss" scoped>
    .pizza-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
        flex-flow: column;
        padding: 20px;

        &--img {
            position: relative;
            width: 100%;
            margin: 0px;

            img {
                width: 100%;
                position: relative;
                top: 0px;
                margin: 0px;
                border-radius: 12px;
                transition: top 150ms ease-out 0s;
            }
        }

        &--title {
            color: rgb(0, 0, 0);
            font-size: 20px;
            line-height: 24px;
            font-weight: 500;
            margin: 8px 0px;
            text-align: center;
        }

        &--size {
            // background-color: #4caf50;
            // border-radius: 10px;
            // opacity: .12;
            // color: #fff;
            // padding: 5px;
            // line-height: 15px;

            p {
                font-size: 14px;
                margin: 0;
                padding: 0;
            }
        }

        &--footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 16px;
        }

        &--price {
            font-weight: 500;
            font-size: 22px;
        }
    }
</style>