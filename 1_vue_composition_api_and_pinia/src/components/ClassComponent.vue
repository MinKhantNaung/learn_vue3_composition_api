<template>
    <div>
        <hr>
        <h1>Class Binding</h1>
        <h2 :class="{'bg-success': isActive, 'text-warning': hasError}">Class Bind By Condition</h2>
        <span :class="classObjects">Classes</span>
        <span :class="classObject">Class</span>
        <div :class="[{[bgInfo]: isActive}, bgWarning, $attrs.class]">Info and Warning</div>
        <h1 :class="$attrs.class">HAHA</h1>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";

const isActive = ref(true)
const hasError = ref(true)

const classObjects = ref({
    'text-danger': true,
    'btn': true,
    'btn-info': true
})

const classObject = computed(() => {
    return {
        'bg-info': isActive.value && !hasError.value,
        'text-success': hasError.value
    }
})

const bgWarning = ref('bg-warning')
const bgInfo = ref('bg-info')
</script>