<template>
    <div>
        <hr>
        <h1>Single Post component</h1>
        {{ main }}
        <PropsDrillingCategory />
    </div>
</template>

<script setup>
import { inject, provide, ref } from 'vue';
import PropsDrillingCategory from './PropsDrillingCategory.vue';

const main = inject('main', 'Default Value')

const searchText = ref('search Text from single post')
const changeSearchText = () => {
    alert('search text is changed')
}

provide('message', {searchText, changeSearchText})
</script>