<template>
  <button
    @click="navigateToSection('1')"
    class="uppercase text-[#FF0000] text-[190px] block"
  >
    <span class="text-black">our </span>
    <slot />
  </button>
</template>

<script setup>
const props = defineProps(['sectionId']);

const navigateToSection = sectionId => {
  const section = document.getElementById(props?.sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
};
</script>
