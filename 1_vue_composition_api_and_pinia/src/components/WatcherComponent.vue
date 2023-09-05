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
</script>
