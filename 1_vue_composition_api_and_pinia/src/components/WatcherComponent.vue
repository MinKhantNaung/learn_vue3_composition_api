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
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

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
</script>
