<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from "vue";
import EventHandling from "../components/EventHandling.vue";
import FormInput from "../components/FormInput.vue";
import ListRendering from "../components/ListRendering.vue";
import TemplateSyntax from "../components/TemplateSyntax.vue";
import WatcherComponent from "../components/WatcherComponent.vue";
import SinglePost from "../components/SinglePost.vue";
import PropValidate from "../components/PropValidate.vue";
import PostsVue from "../components/PostsVue.vue";
import CustomInput from "../components/CustomInput.vue";
import UserName from '../components/UserName.vue'
import MyButton from "../components/MyButton.vue";
import SlotComponent from "../components/SlotComponent.vue";
import MultipleSlot from '../components/MultipleSlot.vue'

onBeforeMount
(() => {
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

const counterRef = ref(null)

onMounted(() => console.log(counterRef.value + 'ref on component'))

const postTitle = ref('Laravel Vue Nuxt Pinia')

const postObj = ref({
  title: 'hello',
  hero: 'Itachi'
})

// custom input
const searchText = ref('Hello Laravel + Vue + Nuxt')

// Multiple V-model binding
const firstName = ref('Laravel')
const lastName = ref('Vue')

// Fallthrough Attributes
const showAlert = () => {
  alert('You are Laravel+vue+react+nuxt+next Developer')
}
</script>

<template>
  <div>
    <Counter ref="counterRef" />
    <TemplateSyntax />
    <ComputedComponent />
    <ClassComponent class="text-white bg-black" />
    <StyleBinding />
    <ConditionalRender />
    <ListRendering />
    <EventHandling />
    <FormInput />
    <WatcherComponent />
    <SinglePost title="Laravel Vue Developer" postNum="50" :postTitle="postTitle" :postObj="postObj" />
    <PropValidate :id="50" title="Laravel vue nuxt react next" :obj1="postObj" paragraph="hello" />
    <hr>
    <PostsVue />
    <hr>
    <CustomInput :searchText="searchText" @update-text="searchText = $event" />
    <hr>
    <UserName v-model:firstName="firstName" v-model:lastName="lastName"/>
    <hr>
    <MyButton class="btn btn-success" @click.prevent="showAlert" />
    <hr>
    <SlotComponent><span class="text-danger">Click</span><span class="text-success">Me{{ firstName }}{{ lastName }}</span></SlotComponent>
    <SlotComponent/>
    <MultipleSlot>
      <!-- <template v-slot:header>
        <h1>Header Content</h1>    
      </template>
      <template v-slot:default>
        <p>Main Content</p>
      </template>
      <template v-slot:footer>
        <small>Footer Content</small>
      </template> -->
      <template #header>
        <h1>Header Content</h1>
      </template>
      <template #default>
        <p>Main Content</p>
      </template>
      <template #footer>
        <small>Footer Content</small>
      </template>
      </MultipleSlot>
  </div>
</template>
