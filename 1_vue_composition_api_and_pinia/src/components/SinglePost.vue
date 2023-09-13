<template>
    <div>
        <h1>Passing Props To Child Components</h1>
        <h2 class="text-decoration-underline">{{ title }}</h2>
        <button @click.prevent="acceptProps">Click</button>
        <h3>{{ postTitle }}</h3>
    </div>
</template>

<script setup>
// if you can use array 
// const props = defineProps(['title'])
const props = defineProps({
    title: String,
    postNum: Number,
    postTitle: String
})

const acceptProps = () => {
    alert(props.title + props.postNum)
}
</script>