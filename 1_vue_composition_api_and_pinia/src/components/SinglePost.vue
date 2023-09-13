<template>
    <div>
        <h1>Passing Props To Child Components</h1>
        <h2 class="text-decoration-underline">{{ title }}</h2>
        <h2>{{ name }}</h2>
        <h2>{{ computedName }}</h2>
        <button @click.prevent="acceptProps">Click</button>
        <h3>{{ postTitle }}</h3>
        <h4>Parent : {{ postObj.title }}</h4>
    </div>
</template>

<script setup>
// if you can use array 

import { computed, ref } from "vue"

// const props = defineProps(['title'])
const props = defineProps({
    title: String,
    postNum: Number,
    postTitle: String,
    postObj: Object
})

const name = ref(props.title)
console.log(name.value)
name.value = 'hello Min Khant Naung'
console.log(name.value)

const computedName = computed(() => props.title.toLowerCase())

const acceptProps = () => {
    alert(props.title + props.postNum)
}

setTimeout(() => {
    props.postObj.title = 'Min Khant Naung (laravel+vue+react+nuxt+next)'
}, 3000)
</script>