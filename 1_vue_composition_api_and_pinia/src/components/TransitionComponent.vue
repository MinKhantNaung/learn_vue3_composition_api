<template>
    <div>
        <hr>
        <h1>Transition Component</h1>
        <button @click.prevent="show = !show">Toggle</button>
        <Transition name="slide-fade">
            <h1 v-if="show" class="bg-success text-white">Min Khant Naung (Laravel Vue Nuxt)</h1>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(true)
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>