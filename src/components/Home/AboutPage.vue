<template>
  <div class="bg-gray-300 h-max">
      <div  class="py-24">
        <div class="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row-reverse ">
        <div class="lg:w-2/3 p-8 mt-20" >
          <div class="flex justify-center items-center">
            <div class="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl s font-bold  italic    leading-loose">
              ABOUT ME?       
              <div class="border-2  border-gray-700"></div>
            </div>
          </div>
            <div  v-for="(detail, index) in AboutME" :key="index" class="px-2 py-4" v-show="currentIndex === index">
              <div class="flex  justify-center items-center">
                <button  :disabled=" currentIndex > 0 ? false:true" @click="previousDetails()" class="bg-gray-400  hover:bg-gray-700   rounded-full ">
                  {{ '<' }}
                </button>
                <h2 class="  text-4xl px-3">{{ detail.Title }} </h2>
                <button @click="nextDetail()" class="bg-gray-400  hover:bg-blue-600   rounded-full ">
                  {{ '>' }}
                </button>
              </div>
              <div class="h-4/6 py-3 ">
                <p class="mb-6  text-lg leading-relaxed flex text-center italic">
                    {{ detail.details }}
                </p>
              </div>
          </div>
        </div>
        <div class="flex items-center justify-center h-max xl:w-1/2 lg:w-1/3 p-8 ">
          <img src="../../assets/image/profile2.jpg" alt="Your Name" class="w-md  transition-transform duration-500 transform hover:scale-125 zoomed
          max-w-xs md:max-w-sm lg:max-w-full xl:max-w-md pt-4 px-4 pb-20  bg-gray-500  rounded-lg shadow-xl transform rotate-0 lg:rotate-3 xl:rotate-6"/>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
      import {ref} from 'vue'
      
   

        const AboutME =ref([
          {Title:'Web Developer',details:'Web Developer with two years of experience in full-stack development,testing, and debugging. Also, skilled in training new employees and optimizing web functionalities to improve data retrieval and workflow efficiencies.'},
          {Title:'Education',details:'I Graduated at Cavite State University Cavite City Campus, Pulo II Cavite City, where I pursued a Bachelor of Science in Information Technology. I graduated in 2020 with a strong focus on Web development and programming languages.'},
          {Title:'Hobbies',details:"I am a passionate individual with a diverse set of interests that add vibrancy to my life. Music is my refuge, providing me with a tranquil escape and fueling my creativity.  also I'm an adventurous explorer and a dedicated food enthusiast. Traveling lets me uncover the beauty of diverse cultures, while my love for food fuels my curiosity in trying new cuisines. I'm a devoted cinephile who appreciates the power of storytelling through film, offering me a window into different worlds."},

        ])

    const currentIndex= ref(0)
    const nextDetail=()=> {
    currentIndex.value= (currentIndex.value + 1) % AboutME.value.length;
    }
    const previousDetails=()=> {
    currentIndex.value= (currentIndex.value - 1) % AboutME.value.length;
    }

  </script>
  
  <style>

  .bg-custom-gradient {
    background-image: linear-gradient(to bottom, #d9e2eb, #bec7d1, #a4adb7, #8b939e, #737a86, #646a77, #555b68, #474c5a, #3d4250, #333847, #2a2e3d, #212534);
  }
  
  </style>