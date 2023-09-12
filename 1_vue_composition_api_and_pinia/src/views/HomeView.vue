<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from "vue";
import Counter from "../components/Counter.vue";
import EventHandling from "../components/EventHandling.vue";
import FormInput from "../components/FormInput.vue";
import ListRendering from "../components/ListRendering.vue";
import TemplateSyntax from "../components/TemplateSyntax.vue";
import WatcherComponent from "../components/WatcherComponent.vue";

onBeforeMount(() => {
    console.log('before mount')
})

onMounted(() => {
    console.log('mounted')
})

onBeforeUnmount(() => {
    console.log('before unmounted')
})

onUnmounted(() => {
    console.log('unmounted')
})

onBeforeUpdate(() => {
  console.log('beforeUpdated')
})

onUpdated(() => {
  console.log('on updated')
})
</script>

<template>
  <div>
    <Counter />
    <TemplateSyntax />
    <ComputedComponent />
    <ClassComponent class="text-white bg-black" />
    <StyleBinding />
    <ConditionalRender />
    <ListRendering />
    <EventHandling />
    <FormInput />
    <WatcherComponent />
  </div>
</template>
