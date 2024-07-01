<template>
  <button
    @click="navigateToSection('1')"
    class="uppercase text-[#FF0000] text-7xl md:text-[160px] lg:text-[150px] 3xl:text-[210px] leading-none block text-left"
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
