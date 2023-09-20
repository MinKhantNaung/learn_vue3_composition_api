<template>
    <div>
        <hr>
        <h1>Posts Component</h1>
        <PropsDrillingSinglePost :searchText="searchText" />
    </div>
</template>

<script setup>
import PropsDrillingSinglePost from './PropsDrillingSinglePost.vue';

defineProps({
    searchText: {
        type: String,
        required: true,
    }
})
</script>