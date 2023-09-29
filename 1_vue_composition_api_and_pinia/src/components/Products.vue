<template>
    <div>
        <h1>Products</h1>
        Load Post ids : <span v-for="n in 20" :key="n" @click.prevent="getProductsByApi(`https://fakestoreapi.com/products/${n}`)" class="btn btn-sm btn-secondary ms-1">{{ n }}</span>
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
                <button class="btn btn-sm btn-success">Buy</button>
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

const postId = ref(null);

const { products, error, getProductsByApi } = getProducts()
</script>