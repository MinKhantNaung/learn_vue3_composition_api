<script setup>
import Counter from '../components/Counter.vue';
import TemplateSyntax from '../components/TemplateSyntax.vue';

</script>

<template>
  <div>
    <Counter/>
    <TemplateSyntax />
    <ComputedComponent />
    <ClassComponent class="text-white bg-black" />
    <StyleBinding />
  </div>
</template>
