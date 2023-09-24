<template>
    <div>
      <div class=" px-4 py-20 bg-gray-300">
          <div class="container mx-auto">
            <div class="flex justify-center">
              <h2 class="text-3xl md:text-4xl lg:text-6xl font-semibold text-center mb-6  font-bold font-sans italic   leading-loose">Work Experience</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 " >
              <div class="bg-white p-6 rounded-lg font-semibold shadow-md bg-gray-400 border-4 border-gray-300 shadow-2xl " v-for="(item,i) in 3"  :key="i">
                <h3 class="text-xl md:text-2xl lg:text-4xl font-semibold mb-2 italic ">WEB DEVELOPER</h3>
                <p class=" mb-2"> H.R.D Singapore PTE. LTD  </p>
                <p class=" mb-2">April 2021 - Present</p>
                <div v-for="(item, i) in task" :key="i" class="flex items-center text-sm md:text-base" >
                    <div class=" justify-center  items-center  text-sm">
                        <i class="material-icons text-xs md:text-sm  mr-2 mt-1  text-black">fiber_manual_record</i>
                        {{ item.text }}
                    </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
    const task =ref([
        {text:'Conducted training session for newly and internal hired employees regarding in web development.'},
        {text:'Designing and developing API with a logical structure, endpoints, request and response format, authentication methods, and error handling.'},
        {text:'Creating and maintaining a web system for in-house use involves designing, developing, and managing a web-based application that serves internal and external needs of the company.'},
        {text:'Conducted unit testing on server-side code components to ensure their accuracy, efficiency and adherence to specifications.'}
    ])
</script>

<style >
.bg-gradient-blue {
  background-image: radial-gradient(
      circle,
      #37597c,
      #3a5a7d,
      #3d5a7f,
      #415b80,
      #445b81,
      #42577c,
      #415276,
      #3f4e71,
      #384464,
      #313b57,
      #2a324b,
      #23293f
    );
}

</style>
<!-- https://i.pinimg.com/originals/84/42/4f/84424fafd8c13168ddc2a7c438baa214.jpg -->