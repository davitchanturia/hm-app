<template>
  <section id="1" class="w-full h-screen bg-black">
    <BaseCarousel
      fragmentColor="bg-black"
      gridCarousel
      :data="projectCarouselData"
    />
  </section>
</template>

<script setup>
import BaseCarousel from '../baseCarousel.vue';
import { projectCarouselData } from '../../data/projects.js';
</script>
