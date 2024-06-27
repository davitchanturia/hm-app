<template>
  <div class="flex justify-between items-center">
    <div class="font-MangoGrotesqueBold text-4xl" :class="`text-${color}`">
      01
    </div>

    <div class="flex gap-2 text-white text-lg">
      <button
        @click="$emit('prev')"
        class="p-2 w-7 h-7 flex justify-center items-center"
        :class="`bg-${color}`"
      >
        <img src="/src//assets/icons/back.png" />
      </button>
      <button
        @click="$emit('next')"
        class="p-2 w-7 h-7 flex justify-center items-center"
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
});
</script>
