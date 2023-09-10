<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div class="mx-auto lg:mx-0 text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-left wow">
            Beneficios
          </h2>
      
        </div>
  
          <div
            class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 animate-fade-right wow"
          >
            <div
              v-for="callout in callouts"
              :key="callout.name"
              class="group relative"
            >
              <div
                class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
              >
                <img
                  :src="callout.imageSrc"
                  :alt="callout.imageAlt"
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-base font-semibold text-gray-900 text-center ">
                <a :href="callout.href">
                  <span class="absolute inset-0 " />
                  {{ callout.name }}
                </a>
              </h3>
              <p class=" text-sm text-gray-500 text-center">
                {{ callout.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const callouts = [
    {
      name: "Preparación Integral",
      description: "Nuestros programas ofrecen una preparación académica completa junto con el desarrollo de habilidades personales para que estés completamente preparado para la universidad y la vida.",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
    },
    {
      name: "Éxito Comprobado",
      description: "Nuestros estudiantes han logrado tasas de aceptación excepcionales en universidades de prestigio, lo que demuestra la efectividad de nuestra preparación.",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
    {
      name: "Apoyo Personalizado",
      description: "Ofrecemos asesoramiento y apoyo individualizado para ayudarte a superar obstáculos y alcanzar tus metas académicas y profesionales.",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
  ];
  </script>
  