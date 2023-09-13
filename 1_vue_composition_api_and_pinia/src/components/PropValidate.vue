<template>
    <div>
        <h1>Props Validation</h1>
        <p>Id : {{ id }}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        id: [String, Number],
        title: {
            type: String,
            required: true,
        },
        obj1: {
            type: Object,
            default(rowProps) {
                return {message: 'hello'}
            }
        },
        paragraph: {
            validator(value) {
                return ['success', 'warning', 'danger'].includes(value)
            }
        }
    })
</script>