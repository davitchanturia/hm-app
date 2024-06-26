<template>
  <section
    class="w-full h-screen bg-gray-navigation font-MangoGrotesqueBold text-9xl pt-[76px] pl-10"
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
