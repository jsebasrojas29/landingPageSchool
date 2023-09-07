<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto lg:mx-0 text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Comentarios de nuestros estudiantes
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Escucha a nuestros estudiantes y descubre cómo [Nombre de tu Institución] ha cambiado sus vidas
        </p>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="post in posts"
          :key="post.id"
          class="flex max-w-xl flex-col items-start justify-between"
        >
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.datetime" class="text-gray-500">{{
              post.date
            }}</time>
            <a
              :href="post.category.href"
              class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >{{ post.category.title }}</a
            >
          </div>
          <div class="group relative">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
            >
              <a :href="post.href">
                <span class="absolute inset-0" />
                {{ post.title }}
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {{ post.description }}
            </p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img
              :src="post.author.imageUrl"
              alt=""
              class="h-10 w-10 rounded-full bg-gray-50"
            />
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <a :href="post.author.href">
                  <span class="absolute inset-0" />
                  {{ post.author.name }}
                </a>
              </p>
              <p class="text-gray-600">{{ post.author.role }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: "Excelente experencia",
    href: "#",
    description:
      "La experiencia en [Nombre de tu Institución] ha sido transformadora. Gracias a su apoyo académico y personalizado, logré ingresar a mi universidad soñada. ",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Juan Pérez",
      role: "Estudiante de la Universidad de Caldas",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Grandes profesores",
    href: "#",
    description:
      "Los profesores en [Nombre de tu Institución] realmente se preocupan por tu éxito. Su orientación me ayudó a mejorar mis habilidades de estudio y a superar mis exámenes de ingreso con confianza.",
    date: "Nov 30, 2022",
    datetime: "2020-03-16",
    category: { title: "Sistemas", href: "#" },
    author: {
      name: "María Rodríguez",
      role: "Estudiante de la Universidad de la Amazonia",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Estudiando poco a poco",
    href: "#",
    description:
      "Encontrar [NombreInstitución] fue un punto de inflexión en mi educación. Los simulacros de exámenes y las sesiones de orientación me brindaron la preparación que necesitaba.",
    date: "Mar 01 , 2023",
    datetime: "2020-03-16",
    category: { title: "Matematicas", href: "#" },
    author: {
      name: "Luis Gómezz",
      role: "Estudiante de la Universidad de la Amazonia",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];
</script>
