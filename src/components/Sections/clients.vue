<template>
  <section id="3" class="w-full h-screen bg-black pt-20">
    <div
      class="font-MangoGrotesqueBold text-[100px] md:text-[230px] text-white text-center uppercase"
    >
      clients
    </div>

    <div class="w-full hidden md:block px-5">
      <div class="mt-10">
        <InfiniteCarousel direction="ltr" />
      </div>

      <div class="mt-28">
        <InfiniteCarousel direction="rtl" />
      </div>
    </div>

    <div
      class="max-w-[543px] mx-auto grid md:hidden grid-cols-2 gap-5 md:gap-10 px-5"
    >
      <div
        v-for="client in 12"
        :key="slide"
        class="col-span-1 flex justify-center w-28 md:w-auto h-12 md:h-auto"
      >
        <img
          :src="`/src/assets/images/our-clients/client-${client}.svg`"
          alt="client 1"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import InfiniteCarousel from '../infiniteCarousel.vue';
</script>
