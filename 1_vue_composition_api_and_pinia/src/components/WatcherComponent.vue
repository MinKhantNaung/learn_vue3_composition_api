<template>
  <div>
    <hr />
    <h1>Watcher Property</h1>

    <div>
      <p>Ask a Question!</p>
      <input v-model="question" type="text" />
      <p>Answer: {{ answer.answer }}</p>
      <img :src="responseData.image" style="width: 200px" />
    </div>

    <h2>Watch Source Types</h2>
    <h3>Single Ref</h3>
    x : <input v-model="x" type="text" />
    <p>{{ changedX }}</p>
    y : <input v-model="y" type="text" /> <br />
    z : <input v-model="z" type="text" />
    <h3>{{ changeXYZ }}</h3>
    <br />
    {{ changeXY }} <br />
    sum is {{ total }}

    <br>
    
    <h3>Count : <input type="text" v-model="obj.count"></h3>
    <h5>{{ newCount }}</h5>
    <h4>Count 2 : <input type="text" v-model="obj2.count"></h4>
    <h5>{{ newCount2 }}</h5>
    <h4>Watch in Nested Object</h4>
    <h5><input type="text" v-model="nestedObj.count.value"> Replaced Count is {{ replaceCount }}</h5>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";

const question = ref("");
const answer = ref("Question generally contains ?");
const responseData = ref([]);

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "Thinking...";

    try {
      const res = await fetch("https://yesno.wtf/api");
      const resJson = res.json();
      answer.value = await resJson;

      responseData.value = await resJson;
    } catch (error) {
      answer.value = "Error! Could not reach the API";
    }
  }
});

// watch source types
// single ref
const x = ref(0);
const y = ref(0);
const z = ref(0);

const changedX = ref(0);
const changeXY = ref("");
const changeXYZ = ref("");

watch(x, (newX) => {
  changedX.value = `new x is ${newX}`;
});
watch(y, (newY) => {
  changedX.value = `new y is ${newY}`;
});

// Getter
const total = ref(0);
watch(
  () => parseInt(x.value) - parseInt(y.value),
  (sum) => {
    total.value = sum;
  }
);

// array of multiple sources
watch([x, () => y.value], ([newX, newY]) => {
  changeXY.value = `x is changed to ${newX} and y is changed to ${newY}`;
});

watch([x, () => y.value, () => z.value], ([newX, newY, newZ]) => {
  changeXYZ.value = `x is ${newX}, y is ${newY} and z is ${newZ}`;
});

// how to use watch for array, object
const newCount = ref(0);

const obj = ref({
  count: 0,
  title: 'Laravel Developer',
});

watch(() => obj.value.count, (newTitle) => {
 newCount.value = newTitle
})

const newCount2 = ref(0);

const obj2 = reactive({
  count: 0,
  title: 'Laravel Developer'
})

watch(() => obj2.count, (newName) => {
  newCount2.value = newName
})

// watch object
watch(obj.value, (newObj) => {
  console.log(`The new count is ${newObj.count}`)
})

// new and old in value of object
watch(() => obj.value.count, (newCount, oldCount) => {
  alert(`new count is ${newCount} and old count is ${oldCount}`)
})

// new and old in object
watch(obj.value, (newObj, oldObj) => {
  alert(newObj.count)
})

// nested object
const nestedObj = reactive({
  count: {value: 0, title: 'hello'}
})

const replaceCount = ref('');

watch(() => nestedObj.count.value, (newCount, oldCount) => {
  replaceCount.value = newCount
})
</script>