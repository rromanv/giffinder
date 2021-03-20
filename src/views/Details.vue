<template>
  <div v-if="gif" class="mt-8 grid justify-items-center space-y-4">
    <h1 class="text-3xl font-thin text-gray-200">{{ gif.title }}</h1>
    <img :src="gif.images.original.webp" :alt="gif.title" />
    <p class="text-gray-200 font-light">Rating: {{ gif.rating }}</p>
  </div>
  <div v-else class="text-gray-200 text-2xl block text-center mt-8">
    Loading ...
  </div>
</template>

<script setup>
import { gif } from '../helpers/useGifs'
</script>
