<script setup>
import Clients from './components/Sections/clients.vue';
import Navigation from './components/Sections/navigation.vue';
import Projects from './components/Sections/projects.vue';
import Story from './components/Sections/story.vue';
import Works from './components/Sections/works.vue';

console.log(Window.scrollY);
</script>

<template>
  <div>
    <Navigation />
    <Projects />
    <Works />
    <Clients />
    <Story />
  </div>
</template>
