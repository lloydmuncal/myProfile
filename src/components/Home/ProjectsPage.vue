<template>
    <div class="container mx-auto    ">
      <div>
          <div class="flex justify-center items-center">
            <div class="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl py-3 font-bold  italic   
            leading-loose">
              Portfolio      
              <div class="border-2  border-gray-700"></div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-2">
        <a :href="project.demoUrl" target="_blank" rel="noopener noreferrer">
          <div class="bg-gray-400 rounded-lg shadow-lg p-6 cursor-pointer ">
            <div class="mb-4">
              <h2 class="text-2xl text-white font-semibold">{{ project.title }}</h2>
              <p class="text-white">{{ project.description }}</p>
            </div>
            <div class="mb-4">
              <img :src="project.imageUrl" alt="Project Image" class="rounded-lg" />
            </div>
          </div>
        </a>
      </div>

      
    </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  
  const project = ref({
    title: 'Employee Management System',
    description: 'Mama mo CRUD.',
    imageUrl: 'https://user-images.githubusercontent.com/48409548/94567114-8aa5ea80-0284-11eb-99f6-87401b099848.png',
    demoUrl: 'https://example.com/demo',
    codeUrl: 'https://github.com/yourusername/project-repo',
  });
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  