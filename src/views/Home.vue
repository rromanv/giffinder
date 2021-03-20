<template>
  <Search />
  <div
    class="mt-8 container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"
  >
    <router-link v-for="gif in gifs" :key="gif.id" :to="`/${gif.id}`">
      <img :src="gif.images.downsized.url" alt="" />
    </router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gifs, getGifs } from '../helpers/useGifs'

onMounted(() => {
  getGifs()
})
</script>
