<template>
  <div class="bg-white py-24 sm:py-32 text-center">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-6xl lg:mx-0">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-6"
        >
          Preguntas frecuentes
        </h2>
        <Disclosure>
          <DisclosureButton class="py-2 mx-auto  py-4">
             ¿Cuáles son los requisitos de admisión a sus programas preuniversitarios?
          </DisclosureButton>
          <DisclosurePanel class="text-gray-500">
             Los requisitos de admisión varían según el programa, pero en general, requerimos un expediente académico sólido y una solicitud completada. Te recomendamos que nos contactes para obtener información específica sobre los programas que te interesan.
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div class="mx-auto max-w-6xl lg:mx-0">
        <Disclosure>
          <DisclosureButton class="py-2 mx-auto  py-4">
           ¿Cómo puedo financiar mis estudios preuniversitarios?
          </DisclosureButton>
          <DisclosurePanel class="text-gray-500">
            Ofrecemos opciones de financiamiento, becas y planes de pago flexibles para ayudarte a costear tus estudios. Puedes obtener más detalles sobre estas opciones en nuestra sección de ayuda financiera o contactándonos directamente.
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div class="mx-auto max-w-6xl lg:mx-0">
        <Disclosure>
          <DisclosureButton class="py-2 mx-auto  py-4">
            ¿Cuál es el enfoque de su institución en el desarrollo personal de los estudiantes?
          </DisclosureButton>
          <DisclosurePanel class="text-gray-500">
            En [Nombre de tu Institución], creemos en un enfoque integral para el éxito. Además de la preparación académica, ofrecemos programas y recursos para el desarrollo de habilidades personales, como la gestión del tiempo y el manejo del estrés, para ayudar a nuestros estudiantes a prosperar en todas las áreas de sus vidas.
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div class="mx-auto max-w-6xl lg:mx-0">
        <Disclosure>
          <DisclosureButton class="py-2 mx-auto  py-4">
            ¿Cuáles son las tasas de aceptación de sus estudiantes en universidades de prestigio?
          </DisclosureButton>
          <DisclosurePanel class="text-gray-500">
            Nuestros estudiantes han logrado una alta tasa de aceptación en una amplia variedad de universidades de renombre. Si deseas obtener estadísticas específicas sobre la aceptación de nuestros graduados en las universidades de tu interés, no dudes en contactarnos y con gusto te proporcionaremos esa información detallada. Estas preguntas frecuentes y respuestas pueden ayudar a aclarar las dudas comunes que los visitantes de tu página de inicio puedan tener sobre tus programas preuniversitarios y tu institución en general.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
</script>
