<template>
    <div class="d-flex align-items-center justify-content-center">
        <button @click.prevent="decreaseCount" type="button" class="btn btn-secondary">-</button>
        <span>{{ count }}</span>
        <button @click.prevent="increaseCount" type="button" class="btn btn-primary">+</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const decreaseCount = () => {
    if(count.value !== 0) {
        count.value--;
    }
}
const increaseCount = () => {
    if(count.value > -1) {
        count.value++;
    }
}
</script>