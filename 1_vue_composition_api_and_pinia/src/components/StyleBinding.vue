<template>
  <div>
    <hr />
    <h1>Style Bindings</h1>
    <p
      :style="{
        color: colorRed,
        fontSize: `${fontSize}px`,
        'background-color': backgroundColor,
      }"
    >
      Color Red and font size is 30px
    </p>
    <p :style="styleObject">Color Yellow and font size is 50px</p>
    <span :style="styleObject2">Style Object 2</span>
    <h3 :style="[baseStyle, styleOne]">Bind Style with array</h3>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const colorRed = ref("red");
const fontSize = ref(30);
const backgroundColor = ref("green");

const styleObject = ref({
    color: 'yellow',
    fontSize: '50px'
})

const styleObject2 = computed(() => {
    return {
        color: colorRed.value,
        fontSize: fontSize.value + 'px'
    }
})

setTimeout(() => {
    colorRed.value = 'green'
    fontSize.value = 100
}, 5000);

const baseStyle = ref({
    color: 'gold',
    fontSize: '25px'
})
const styleOne = ref({
    border: '2px solid red'
})
</script>
