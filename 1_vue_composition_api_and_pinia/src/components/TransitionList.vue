<template>
    <div>
        <hr>
        <h1>TransitionGroup</h1>
        <button @click.prevent="onAdd">Add</button>
        <ul>
            <TransitionGroup name="list">
                <li v-for="(list, index) in lists" :key="list" @click.prevent="onRemove(index)" style="cursor: pointer;">
                    {{ list }}
                </li>
            </TransitionGroup>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue";

const lists = ref([1, 2, 3, 4]);

const onAdd = () => {
    const num = Math.floor(Math.random() * 100);
    const index = Math.floor(Math.random() * lists.value.length)
    lists.value.splice(index, 0, num)
}

const onRemove = (index) => {
    lists.value.splice(index, 1)
}
</script>

<style scoped>
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.list-move, 
.list-enter-active,
.list-leave-active {
    transition: all 1s;
}
</style>