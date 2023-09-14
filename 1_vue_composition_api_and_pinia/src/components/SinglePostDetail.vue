<template>
    <div>
        <h6>Title: {{ post.title }}</h6>
        <button @click.prevent="$emit('editPost', post.id)">Edit Post</button>
        <hr>
    </div>
</template>

<script setup>
const props = defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>