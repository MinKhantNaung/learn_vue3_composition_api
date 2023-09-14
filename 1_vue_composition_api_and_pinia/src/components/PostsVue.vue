<template>
    <div>
        <h1>Posts Details</h1>
        <SinglePostDetail v-for="post in posts" :key="post.id" :post="post" @edit-post="updatePost" />
    </div>
</template>

<script setup>
import { ref } from "vue";

import SinglePostDetail from "./SinglePostDetail.vue";

const posts = ref([
    {id:1, title: 'post 1'},
    {id:2, title: 'post 2'},
    {id:3, title: 'post 3'}
])

const updatePost = (postId) => {
    // posts.value = posts.value.map(post => {
    //     if(post.id == postId) {
    //         return{...post, title: 'post is updated' }
    //     }
    //     return post;
    // })
    const postToUpdate = posts.value.find(post => post.id == postId)
    if(postToUpdate) {
        postToUpdate.title = 'Hello title is updated'
    }
}
</script>