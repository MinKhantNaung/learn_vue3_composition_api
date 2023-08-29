<script setup>
import ClassComponent from '../components/ClassComponent.vue';
import Counter from '../components/Counter.vue';
import TemplateSyntax from '../components/TemplateSyntax.vue';

</script>

<template>
  <div>
    <Counter/>
    <TemplateSyntax />
    <ComputedComponent />
    <ClassComponent class="text-white bg-black" />
  </div>
</template>
