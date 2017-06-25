<template>
    <div class="cart-container" v-if="items.length">
        <ul class="cart">
            <div class="close" @click="closeMe">
                <span>&times;</span>
            </div>
            <cart-item v-for="item in items" :book="item" :key="item.id" @add="add(item)" @substract="substract(item)" @clear="clear(item)">
            </cart-item>
        </ul>
    </div>
</template>

<script>
import cartService from '@/services/cart.service.js'
import CartItem from './CartItem'
export default {
    name: 'cart',
    components: {
        CartItem
    },
    created() {
        this.items = cartService.getCartItems();
    },
    data() {
        return {
            items: null,
        }
    },
    methods: {
        closeMe() {
            this.$emit('closeCart');
        },
        add(item) {
            this.$emit('add', item);
        },
        substract(item) {
            this.$emit('substract', item);
        },
        clear(item) {
            this.$emit('clearItemFromCart', item);
        }
    }
}
</script>

<style scoped>
.cart-container {
    position: absolute;
}

.cart {
    position: relative;
    background: #dedefe;
    padding: 2em;
}

.cart-item {
    background: white;
    box-shadow: -5px -5px 10px 0 rgba(0, 0, 0, 0.5);
}


.close {
    position: absolute;
    top: 0;
    right: 0;
    width: 3em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.close span {
    font-size: 2em;
    transition: all 0.5s;
}

.close span:hover {
    font-size: 2.5em;
    font-weight: 900;
}

.close span:active {
    font-size: 3.5em;
    font-weight: 900;
}

button {
    height: 50px;
    min-width: 50px;
    outline: none;
}

</style>

