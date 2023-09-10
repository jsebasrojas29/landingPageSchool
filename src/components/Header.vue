<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
const route = useRoute();
const paginaInicio = computed(() => route.name === "inicio");
</script>
<template>
  <header class="bg-slate-800" :class="{ fondo: paginaInicio }">
    <div class="mx-auto container px-5 py-5">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'inicio' }">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </RouterLink>
        </div>
        <nav class="flex gap-4">
          <RouterLink
            :to="{ name: 'inicio' }"
            class="text-white  font-bold"
            active-class="text-sky-400"
          >
            Inicio
          </RouterLink>
          <RouterLink
            :to="{ name: 'Programas' }"
            class="text-white  font-bold"
            active-class=" text-sky-400"
          >
            Programas
          </RouterLink>
          <RouterLink
            :to="{ name: 'Plataforma' }"
            class="text-white  font-bold"
            active-class=" text-sky-400"
          >
          Plataforma
          </RouterLink>
        </nav>
      </div>
      <div v-if="paginaInicio">
        <div class="mx-auto max-w-2xl py-32 sm:py-24 lg:py-48">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
  
          </div>
          <div class="text-center">
            <h1
              class="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Prepárate para el Éxito Universitario
            </h1>
            <p class="mt-6 text-lg leading-8 text-white">
              Transforma tu futuro con nosotros: Tu camino hacia la universidad
              comienza aquí.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black  shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Comienza Ahora</a
              >
              <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
              >Learn more <span aria-hidden="true">→</span></a
            > -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style>
.fondo {
  background-image: url("../assets/fondo.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
}
</style>
