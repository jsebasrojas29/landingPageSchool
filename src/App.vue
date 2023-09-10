<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";

</script>

<template>
  <Header />
  <main class="   mt-10">
    <RouterView></RouterView>
  </main>
  
</template>
