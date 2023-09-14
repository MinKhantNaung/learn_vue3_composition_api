<template>
    <div>
        <h6>Title: {{ post.title }}</h6>
        <button @click.prevent="$emit('editPost', post.id, 'Hello World')">Edit Post</button>
        <h5>To update by using emit in function</h5>
        <button @click.prevent="updatePost">Update Post</button>
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

// const emit = defineEmits(['updatePost'])
// validate above emit custom event
const emit = defineEmits({
    updatePost(postId) {
        if(postId && typeof postId == 'number') {
            return true
        }
        return false
    }
})

const updatePost = () => {
    emit('updatePost', props.post.id)
}
</script>