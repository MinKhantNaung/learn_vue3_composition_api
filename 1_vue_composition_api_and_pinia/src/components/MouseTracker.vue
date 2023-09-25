<template>
    <div>
        Mouse position is at {{ x }} and {{ y }}
    </div>
</template>

<script setup>
import useMouse from '../composables/mouse';

const {x, y} = useMouse()
</script>