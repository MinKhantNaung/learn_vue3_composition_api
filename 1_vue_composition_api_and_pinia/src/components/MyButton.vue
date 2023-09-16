<template>
        <button @click.prevent="showAlert">Click</button>
</template>

<script setup>
// child will be first // and parent will be second
const showAlert = () => {
    alert('I am Laravel+Vue+Nuxt Developer')
}
</script>