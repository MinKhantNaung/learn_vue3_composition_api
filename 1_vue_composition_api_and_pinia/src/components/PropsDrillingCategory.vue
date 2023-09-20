<template>
    <div>
        <hr>
        <h1>Category Component</h1>
        {{ searchText }}
    </div>
</template>

<script setup>
    defineProps({
        searchText: {
            type: String,
            required: true
        }
    })
</script>