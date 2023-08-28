<template>
    <div>
        <h1 :id="dynamicId" :[titleAttr]="titleValue">Hello Template</h1> 
        <h2 v-html="message"></h2>
        <div v-bind="objectOfIdClass"></div>
        <div>{{ 1 + 1 }}</div>
        <span @click="showAlert">{{ message ? 'yes' : 'no' }}</span>
        <span @[eventName].prevent="clicked">{{ Math.random() }}</span>
    </div>
</template>

<script setup>
const message = 'Hello message';
const dynamicId = 'my-id';
const objectOfIdClass= {
    id: dynamicId,
    class: 'container',
};
const titleAttr = 'title';
const titleValue = 'This is title';
const showAlert = () => alert('show alert');
const eventName = 'mouseover';
const clicked = () => alert('clicked');
</script>