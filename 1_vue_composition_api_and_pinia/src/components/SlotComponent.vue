<template>
    <div>
        <hr>
        <h1>Slot Component</h1>
        <button>
            <slot>Default Content</slot>
        </button>
    </div>
</template>

<script setup>
// note
// if you want to send any javascript data , send with props,
// if you want to send any html, send with slots,
</script>