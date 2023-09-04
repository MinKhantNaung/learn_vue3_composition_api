<template>
  <div>
    <hr />
    <h1>List Rendering</h1>
    <div v-for="book in books" :key="book">
      {{ book.title }}
    </div>
    <ul>
      <li v-for="value in myObj" :key="value">
        {{ value }}
      </li>
    </ul>
    <h3>Key and value</h3>
    <ul>
      <li v-for="(value, key) in myObj" :key="key">{{ key }} - {{ value }}</li>
    </ul>
    <h3>Key and value and index</h3>
    <ul>
      <li v-for="(value, key, index) in myObj" :key="key">
        {{ index }} - {{ key }} - {{ value }}
      </li>
    </ul>
    <span v-for="n in 50" :key="n">Min Khant Naung</span>
    <hr />
    <hr />
    <div v-for="(book, index) in books" :key="index">
      <div>{{ book.title }}</div>
      <input type="text" />
    </div>
    <div>
      <button @click="shuffle(books)" type="button">Shuffle</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const books = ref([
  { title: "book 1" },
  { title: "book 2" },
  { title: "book 3" },
  { title: "book 4" },
]);

const myObj = ref({
  title: "my Book",
  author: "my Author",
});

const shuffle = (books) => {
  for (let i = books.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
    [books[i], books[j]] = [books[j], books[i]]; // Swap elements at i and j
  }
};
</script>
