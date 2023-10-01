<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BootstrapNavbar from './components/BootstrapNavbar.vue';
</script>

<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/" class="btn btn-primary">Home</RouterLink>
        <RouterLink to="/about" class="btn btn-info">About</RouterLink>
      </nav>

      <BootstrapNavbar />

    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
