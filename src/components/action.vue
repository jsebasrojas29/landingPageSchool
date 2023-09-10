<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <div
      class="relative isolate overflow-hidden bg-gray-900 py-10 sm:py-14 lg:py-32"
    >
      <div class=" py-4 sm:py-5">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 animate-fade-left wow">
  
         
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Únete a Nuestra Comunidad
            </h2>
            <p class="mt-4 text-lg leading-8 text-gray-300">
              Recibe actualizaciones exclusivas y mantente conectado con nosotros.
              Ingresa tu correo electrónico y síguenos en las redes sociales para
              unirte a nuestra comunidad educativa.
            </p>
            <div class="mt-6 flex max-w-md gap-x-4">
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Introduce tu correo electrónico"
              />
              <button
                type="submit"
                class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                suscribite
              </button>
            </div>
          </div>
  
          <footer class=" text-white py-14">
      <div class="container mx-auto text-center animate-fade-up wow">
        <!-- Botones de redes sociales con imágenes -->
        <div class="flex justify-center space-x-4">
          <a href="#" class="text-gray-400 hover:text-white">
            <img src="../assets/facebook.png" alt="Facebook" class="w-10 h-10">
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <img src="../assets/whatsApp.png" alt="Instagram" class="w-10 h-10">
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <img src="../assets/Instagram.png" alt="WhatsApp" class="w-10 h-10">
          </a>
        </div>
        
        <!-- Información de derechos de autor -->
        <p>&copy; {{ currentYear }} [Nombre de tu Empresa]</p>
      </div>
    </footer>
       
      </div>
    </div>
  </template>
  
  <script setup>
  // import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/vue/24/outline";
  </script>
  