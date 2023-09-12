<template>
    <div class="text-center" :ref="(el) => updateRef(el)">
        <h3 ref="counterRef">{{ counterTitle }}</h3> <br>
        <button @click.prevent="decreaseCount" type="button" class="btn btn-secondary">-</button>
        <span>{{ count }}</span>
        <button @click.prevent="increaseCount" type="button" class="btn btn-primary">+</button>
        <br>
        <input type="text" v-model="counterTitle">
        <br>
        <br>
        <h4>{{ counterData.title }}</h4>
        <h5 @click="increaseReactiveCount">{{ counterData.count }}</h5>
        <h6>It is {{ oddOrEven }}!!!</h6>


        <h1>Template Ref</h1>
        <div v-for="number in numbers" :key="number" ref="numbersRef">{{ number }}</div>
    </div>
</template>

<script setup>
import { computed, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, reactive, ref } from "vue";

const counterRef = ref(null)

const numbers = ref([1, 2, 3, 4])
const numbersRef = ref([]);

// Note that you can only access the ref after the component is mounted
onMounted(() => {
    counterRef.value.style.color = 'red'
    console.log(numbersRef.value)
})

const updateRef = (el) => {
    console.log('update ref called')
}

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

const isOddOrEven = ref('');

const oddOrEven = computed(() => {
    if(counterData.count % 2 === 0) {
        isOddOrEven.value = 'Even'
    } else {
        isOddOrEven.value = 'Odd'
    }
    return isOddOrEven.value
})

defineExpose({
    counterRef
})
</script>