<template>
  <div>
    <hr />
    <h1>Event Handling</h1>
    <h2 @click="counter++">Click to Counter++</h2>
    <div>{{ counter }}</div>
    <a href="http://www.google.com" @click.prevent="onClickLink">Click Here</a>
    <button @click="say('Hello')" type="button">Say</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

const onClickLink = () => {
  alert("yes");
};

const say = (greeting) => {
  alert(greeting);
};
</script>
