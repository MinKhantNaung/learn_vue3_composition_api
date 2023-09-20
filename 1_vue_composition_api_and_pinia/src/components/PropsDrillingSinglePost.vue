<template>
    <div>
        <hr>
        <h1>Single Post component</h1>
        <PropsDrillingCategory :searchText="searchText" />
    </div>
</template>

<script setup>
import PropsDrillingCategory from './PropsDrillingCategory.vue';

defineProps({
    searchText: {
        type: String,
        required: true,
    }
})
</script>