<template>
    <div>
        <h1>Products</h1>
       <hr>
        <div v-if="error">
            Error gets {{ error }}
        </div>
        <div v-else-if="products">
            <div v-for="product in products" :key="product.id">
                <h5>ID : {{ product.id }}</h5>
                <h6>{{ product.title }}</h6>
                <p>{{ product.description }}</p>
                <div class="col-md-1">
                    <img :src="product.image" class="w-100">
                </div>
                <button class="btn btn-sm btn-success" v-focus>Buy</button>
                <input type="text" v-focus="color" >
                <hr>
            </div>
        </div>
        <div v-else>
            loading
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import getProducts from '../composables/getProducts'

const color = 'Laravel Vue Nuxt React Next'
// const name must be vFocus
// const vFocus = {
//     mounted: (el) => {
//         el.focus() // this will auto focus input
//         el.style.borderColor = 'green';
//         el.style.color = 'blue';
//     }
// }

const postId = ref(null);

const { products, error, getProductsByApi } = getProducts()
const url = 'https://fakestoreapi.com/products'
getProductsByApi(url)
</script>