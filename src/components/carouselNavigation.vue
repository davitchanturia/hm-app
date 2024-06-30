<template>
  <div class="flex justify-between items-center">
    <div class="font-MangoGrotesqueBold text-4xl" :class="`text-${color}`">
      0{{ currentSlide }}
    </div>

    <div class="flex gap-2 text-white text-lg">
      <button
        @click="$emit('prev')"
        class="p-2 w-7 h-7 flex justify-center items-center hover:scale-125 transition-all"
        :class="`bg-${color}`"
      >
        <img src="/src//assets/icons/back.png" />
      </button>
      <button
        @click="$emit('next')"
        class="p-2 w-7 h-7 flex justify-center items-center hover:scale-125 transition-all"
        :class="`bg-${color}`"
      >
        <img src="/src//assets/icons/next.png" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    required: true,
  },
  currentSlide: {
    type: Number,
    required: true,
    default: 0,
  },
});
</script>
