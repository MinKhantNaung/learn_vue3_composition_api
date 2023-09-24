<template>
    <div>
        <hr>
        <h1>Category Component</h1>
        {{ propMessage }} / {{ main }}

        <h2>ref and function Get from single post with provide, inject</h2>
        <button @click.prevent="changeSearchText">{{ searchText }}</button>
    </div>
</template>

<script setup>
import { inject } from "vue";

const propMessage = inject('propMessage')
const main = inject('main')

const {searchText, changeSearchText} = inject('message')
</script>