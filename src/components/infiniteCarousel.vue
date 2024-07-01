<template>
  <carousel
    :items-to-show="6"
    autoplay="80"
    wrapAround
    transition="2500"
    :dir="direction"
  >
    <slide v-for="client in 12" :key="client">
      <div class="px-5">
        <img
          :src="`/src/assets/images/our-clients/client-${client}.svg`"
          alt="client 1"
        />
      </div>
    </slide>
  </carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

defineProps({
  direction: {
    type: String,
    required: true,
  },
});
</script>

<style>
.carousel__track {
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
</style>
