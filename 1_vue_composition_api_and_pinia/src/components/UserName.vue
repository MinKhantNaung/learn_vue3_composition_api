<template>
    <div>
        <h1>Multiple V-model binding</h1>
        <input type="text" placeholder="First Name" :value="firstName" @input="$emit('update:firstName', $event.target.value)">
        <input type="text" placeholder="Last Name" :value="lastName" @input="$emit('update:lastName', $event.target.value)">
        <br>
        {{ firstName }} {{ lastName }}
    </div>
</template>

<script setup>
const props = defineProps({
    firstName: String,
    lastName: String,
})
</script>