<template>
  <section
    class="w-full h-screen bg-gray-navigation font-MangoGrotesqueBold py-7 md:py-10 lg:py-[76px] pl-[10px] md:pl-5 lg:pl-10 flex flex-col justify-end lg:justify-start"
  >
    <NavigationItem sectionId="1">projects</NavigationItem>
    <NavigationItem sectionId="2">works</NavigationItem>
    <NavigationItem sectionId="3">clients</NavigationItem>
    <NavigationItem sectionId="4">story</NavigationItem>
  </section>
</template>

<script setup>
import NavigationItem from '../navigationItem.vue';
</script>
