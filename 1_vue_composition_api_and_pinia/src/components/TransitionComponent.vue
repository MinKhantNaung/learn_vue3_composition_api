<template>
    <div>
        <hr>
        <h1>Transition Component</h1>
        <button @click.prevent="show = !show">Toggle</button>
        <Transition>
            <h1 v-if="show" class="bg-success text-white">Min Khant Naung (Laravel Vue Nuxt)</h1>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(true)
</script>

<style scoped>
.v-enter-from, .v-leave-to {
    opacity: 0;
}

.v-enter-active, .v-leave-active {
    transition: opacity 0.5s ease;
}
</style>