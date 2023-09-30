<template>
    <div>
        <hr>
        <h1>Transition Component</h1>
        <button @click.prevent="show = !show">Toggle</button>
        <Transition name="fade">
            <h1 v-if="show" class="bg-success text-white">Min Khant Naung (Laravel Vue Nuxt)</h1>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(true)
</script>

<style scoped>
/* .v-enter-from, .v-leave-to {
    opacity: 0;
}

.v-enter-active, .v-leave-active {
    transition: opacity 0.5s ease;
} */

/* transition classes */
/* .v-enter-from */
/* .v-enter-to */
/* .v-enter-active  */

/* .v-leave-from */
/* .v-leave-to */
/* .v-leave-active  */
/* transition classes */

/* .v-enter-from {
    opacity: 0;
}

.v-enter-to {
    opacity: 1;
}

.v-leave-from {
    opacity: 1;
}

.v-leave-to {
    opacity: 0;
}

.v-enter-active, .v-leave-active {
    transition: opacity 2s ease; */
/* } */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>