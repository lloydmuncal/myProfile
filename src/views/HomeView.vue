<template>
  <div  >
    <HomePage id="homepage" />
    <AboutPage id="about"/>
    <SkillsPage id="skills"/>
    <ExperiencePage id="experience"/>
    <ProjectsPage id="project"/>
    <ContactPage id="contact"/>  
    <CFooter/>
  </div>
</template>

<script setup>

  import HomePage from '../components/Home/HomePage.vue';
  import CFooter from '../components/CFooter.vue';
  import AboutPage from '../components/Home/AboutPage.vue';
  import ExperiencePage from '../components/Home/ExperiencePage.vue';
  import ContactPage from '../components/Home/ContactPage.vue';
  import SkillsPage from '../components/Home/SkillsPage.vue';
  import ProjectsPage from '../components/Home/ProjectsPage.vue'


</script>
<style >




</style>