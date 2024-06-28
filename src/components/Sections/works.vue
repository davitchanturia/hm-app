<template>
  <section id="2" class="w-full h-screen bg-[#FF0000]">
    <BaseCarousel
      fragmentColor="bg-[#FF0000]"
      :gridCarousel="false"
      :data="workCarouselData"
    />
  </section>
</template>

<script setup>
import BaseCarousel from '../baseCarousel.vue';
import { workCarouselData } from '../../data/work';
</script>
