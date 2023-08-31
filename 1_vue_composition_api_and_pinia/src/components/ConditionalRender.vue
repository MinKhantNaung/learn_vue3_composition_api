<template>
    <div>
        <hr>
        <h1>Conditional Rendering</h1>
        <button @click="isAwesome = !isAwesome" type="button">Toggle Awesome</button>
        <h1 v-if="isAwesome">Is Awesome.</h1>
        
        <h2 v-else>Is not awesome.</h2>
        <!-- v-if and v-show difference- v-show will set display:none  -->
        <h2 v-show="isAwesome">V-show property</h2>
        <div>
            <span v-if="type == 1" class="btn btn-sm btn-info me-1">1</span>
            <span v-else-if="type == 2" class="btn btn-sm btn-info me-1">2</span>
            <span v-else-if="type == 3" class="btn btn-sm btn-info me-1">3</span>
            <span v-else class="btn btn-sm btn-info me-1">Not number</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const isAwesome = ref(true);
const type = ref(1);
setInterval(() => {
    type.value++;
}, 3000);
</script>