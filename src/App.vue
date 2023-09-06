<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Stats from "./components/Stats.vue";
import Problematic from "./components/problematic.vue";
import Solution from "./components/solution.vue";
import Benefits from "./components/benefits.vue";
import Testimonials from "./components/testimonials.vue";
import Characteristics from "./components/characteristics.vue";
import Faqs from "./components/faqs.vue";
import Action from "./components/action.vue";
</script>

<template>
  <div class="container mx-auto mt-20">
    <Header />
  </div>
  <Stats />
  <Problematic />
  <Solution />
  <Benefits />
  <Testimonials />
  <Characteristics />
  <Faqs />
  <Action />
</template>
