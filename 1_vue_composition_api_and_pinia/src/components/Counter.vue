<template>
    <div class="text-center">
        <h3>{{ counterTitle }}</h3> <br>
        <button @click.prevent="decreaseCount" type="button" class="btn btn-secondary">-</button>
        <span>{{ count }}</span>
        <button @click.prevent="increaseCount" type="button" class="btn btn-primary">+</button>
        <br>
        <input type="text" v-model="counterTitle">
        <br>
        <br>
        <h4>{{ counterData.title }}</h4>
        <h5 @click="increaseReactiveCount">{{ counterData.count }}</h5>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const count = ref(0);

const counterTitle = ref('Counter Title');

const counterData = reactive({
    count: 0,
    title: 'reactiveCounter'
});

const increaseReactiveCount = () => {
    counterData.count++;
}

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