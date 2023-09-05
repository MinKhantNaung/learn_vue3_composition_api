<template>
  <div>
    <hr />
    <h1>Form Input</h1>
    <div>
      <input
        :value="text"
        @input="(event) => (text = event.target.value)"
        type="text"
      />
      <span>{{ text }}</span>
      <p>Instead, we can use v-model.</p>
      <input v-model="text" type="text" />
      <span>{{ text }}</span> <br />
      <textarea v-model="message"></textarea>
      <span>{{ message }}</span>
      <br />
      <p>Checkbox</p>
      <input v-model="checked" type="checkbox" />{{ checked }}
      <p>Multi check</p>
      <input v-model="checkedValues" type="checkbox" value="Laravel" />Laravel
      <input v-model="checkedValues" type="checkbox" value="Vue" />Vue
      <input v-model="checkedValues" type="checkbox" value="Nuxt" />Nuxt
      <input v-model="checkedValues" type="checkbox" value="React" />React
      <p>{{ checkedValues }}</p>
      <p>Radio</p>
      <input type="radio" value="Next" v-model="picked" />
      <input type="radio" value="React Native" v-model="picked" />
      <p>{{ picked }}</p>
      <p>Select Box</p>
      <select v-model="selectedValue">
        <option value="">Select A value</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <p>Select Value is : {{ selectedValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("Nang");
const message = ref("Hello");
const checked = ref(false);
const checkedValues = ref([]);
const picked = ref("");
const selectedValue = ref("");
</script>
