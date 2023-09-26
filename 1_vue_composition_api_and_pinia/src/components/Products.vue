<template>
    <div>
        <h1>Products</h1>
        <hr>
        <div v-if="error">
            Error gets {{ error }}
        </div>
        <div v-else-if="products">
            <div v-for="product in products" :key="product.id">
                <h6>{{ product.title }}</h6>
                <p>{{ product.description }}</p>
                <hr>
            </div>
        </div>
        <div v-else>
            loading
        </div>
    </div>
</template>

<script setup>
import getProducts from '../composables/getProducts'

const url = 'https://fakestoreapi.com/products'
const { products, error } = getProducts(url)
</script>