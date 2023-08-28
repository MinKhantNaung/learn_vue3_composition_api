<template>
  <div>
    <h1>Computed Component</h1>
    <h2>is Executed : '{{ isExecuted }}''</h2>
    <h2>First Name : {{ firstName }}</h2>
    <h2>Last Name : {{ lastName }}</h2>
    <h2>Full Name : {{ fullName }}</h2>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const executed = ref(["first", "second"]);

const isExecuted = computed(() => {
  return executed.value ? "Yes computed" : "no";
});

const firstName = ref("Min Khant Naung");
const lastName = ref("Laravel_Vue_React_Web_Dev");
const fullName = computed(() => {
  return firstName.value + "_" + lastName.value;
});
fullName.value = "Min Laravel Vue React Developer";
</script>
