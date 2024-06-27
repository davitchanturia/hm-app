<template>
  <div class="grid grid-cols-2 items-start gap-5 px-5 py-12 h-full">
    <div v-if="gridCarousel" class="bg-green-800 col-span-1 mt-[10px]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
      perspiciatis qui at quae suscipit molestiae, mollitia illum adipisci
      veritatis accusamus ipsam, eaque quasi quibusdam nobis fugit. Debitis
      laudantium blanditiis recusandae.
    </div>

    <div
      :class="gridCarousel ? 'col-span-1' : 'col-span-2'"
      class="carouselGrid"
      style="height: 100% !important"
    >
      <Carousel ref="carousel">
        <Slide v-for="slide in 3" :key="slide">
          <div
            class="carousel__item relative bg-[url('/src/assets/images/our-work/slide-01.png')] bg-no-repeat bg-cover"
          ></div>
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
                />
              </div>

              <div
                class="text-[110px] uppercase pl-[30px] translate-y-[50px]"
                :class="fragmentColor"
              >
                <div class="text-[#D9D9D9]">City mall</div>
              </div>
            </div>

            <div
              v-else
              class="absolute bottom-0 right-0 text-[110px] uppercase pl-[30px] translate-y-[50px]"
              :class="fragmentColor"
            >
              <div class="text-[#D9D9D9]">City mall</div>
            </div>
          </div>

          <Pagination />

          <div v-if="!gridCarousel" class="w-full absolute top-16 left-0 px-9">
            <CarouselNavigation
              @next="carousel.next()"
              @prev="carousel.prev()"
              color="[#FF0000]"
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
