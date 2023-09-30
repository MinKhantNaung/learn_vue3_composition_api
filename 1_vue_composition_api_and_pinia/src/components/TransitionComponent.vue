<template>
    <div>
        <hr>
        <h1>Transition Component</h1>
        <button @click.prevent="show = !show">Toggle</button>
        <Transition name="bounce">
            <h1 v-if="show" class="bg-success text-white">Min Khant Naung (Laravel Vue Nuxt)</h1>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(true)
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>