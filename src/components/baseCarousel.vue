<template>
  <div class="grid grid-cols-2 items-start gap-14 px-9 py-12 h-full">
    <div v-if="gridCarousel" class="col-span-1 mt-[10px] h-full">
      <div
        class="text-[#D9D9D9] font-InterTightSemiBold text-[44px] font-semibold leading-[47px] h-full flex flex-col justify-between"
      >
        <div
          v-html="data[carousel?.data?.currentSlide.value]?.brief"
          class="uppercase"
        ></div>

        <div class="font-InterTightLight text-4xl">
          <div v-html="data[carousel?.data?.currentSlide.value]?.text"></div>
        </div>
      </div>
    </div>

    <div
      :class="gridCarousel ? 'col-span-1' : 'col-span-2'"
      class="carouselGrid"
      style="height: 100% !important"
    >
      <Carousel ref="carousel">
        <Slide v-for="slide in data" :key="slide">
          <div
            class="carousel__item relative bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url(${slide.image})` }"
          >
            <div
              v-if="!gridCarousel"
              class="absolute bottom-5 left-5 w-1/2 max-w-[800px] text-left font-InterTightLight text-base font-light"
              v-html="slide.text"
            ></div>
          </div>
        </Slide>

        <template #addons>
          <div
            class="w-full absolute bottom-0 px mr-[9px] font-MangoGrotesqueBold"
          >
            <div
              v-if="gridCarousel"
              class="flex items-end w-full overflow-hidden"
            >
              <div class="flex-1 px-[30px] py-[30px]">
                <CarouselNavigation
                  @next="carousel.next()"
                  @prev="carousel.prev()"
                  color="[#FF0000]"
                  :current-slide="carousel?.data?.currentSlide.value + 1"
                />
              </div>

              <div
                class="text-[110px] uppercase pl-[30px] translate-y-7 text-left pt-[30px] max-w-[400px]"
                :class="fragmentColor"
              >
                <div
                  v-html="data[carousel?.data?.currentSlide.value]?.title"
                  class="text-[#D9D9D9] leading-[120px]"
                ></div>
              </div>
            </div>

            <div
              v-else
              class="absolute bottom-0 -right-1 text-[110px] uppercase pl-[30px] translate-y-7 max-w-[600px] text-left pt-[30px]"
              :class="fragmentColor"
            >
              <div
                v-html="data[carousel?.data?.currentSlide.value]?.title"
                class="text-[#D9D9D9] leading-[120px]"
              ></div>
            </div>
          </div>

          <Pagination />

          <div v-if="!gridCarousel" class="w-full absolute top-16 left-0 px-9">
            <CarouselNavigation
              @next="carousel.next()"
              @prev="carousel.prev()"
              color="black"
              :current-slide="carousel?.data?.currentSlide.value + 1"
            />
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import CarouselNavigation from './carouselNavigation.vue';

const props = defineProps({
  gridCarousel: {
    type: Boolean,
    required: true,
  },
  fragmentColor: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});

const carousel = ref(null);
</script>

<style>
.carouselGrid {
  overflow: hidden !important;
}
.carouselGrid > .carousel {
  height: 100% !important;
}

.carousel > .carousel__viewport {
  height: 100% !important;
}

.carousel__viewport > .carousel__track {
  height: 100% !important;
}

.carousel__track > .carousel__slide {
  height: 100% !important;
}

.carousel__item {
  /* max-height: 100%; */
  height: 100%;
  width: 100%;
  background-color: white !important;
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__pagination {
  width: 100% !important;

  padding-right: 40px;
  padding-left: 12px;
  padding-top: 5px;

  position: absolute;
  top: 14px;
  left: 14px;

  flex-wrap: wrap !important;
  justify-content: inherit !important;
}

.carousel__pagination-item {
  flex: 1 0 auto;
  margin: 5px;
  box-sizing: border-box;
}

.carousel__pagination-button {
  width: 100% !important;
}

.carousel__pagination-button::after {
  width: 100%;
  background-color: #d9d9d9;
}

.carousel__pagination-button--active::after {
  background-color: #ff0000 !important;
}
</style>
