<template>
    <div class="bg-header ">
        <div class="h-screen  justify-center flex item-center   ">
            <div class="w-full sm:w-full md:w-full lg:w-full xl:w-full 
             flex items-center justify-center">
              <div class=" flex  flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row  ">
                <div class="flex justify-center items-center  ">
                  <img src="../../assets/image/profile.jpg" alt="Avatar" class="rounded-full border-4 border-gray-700  xl:w-80 xl:h-80  lg:w-72 lg:h-72    md:w-60  md:h-60 sm:w-64 sm:h-64  w-48 h-48 object-cover img-flip " >
                </div>
                  <div class=" xl:py-14 lg:py-14 text-center xl:ml-5  xl:mt-5 lg:ml-5  lg:mt-5 lg:text-left xl:text-left">
                    <div class="uppercase tracking-wide text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-gray-400 italic tracking-tight font-bold font-serif">
                      JOHN LLOYD MUNCAL
                    </div>
                    <div class="flex justify-center xl:justify-start lg:justify-start  mt-1 ">
                        <div class="text-white text-2xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl animate-typewriter hero-subtitle typed "   :data-typed-items="typedItems">
                           <span class="bg-black bg-opacity-40">{{ currentText }} </span> 
                           <span class="font-semibold text-2xl xl:text-4xl  lg:text-4xl md:text-3xl sm:text-3xl pb-4 text-white animate-blink z-10">{{ '|' }}</span>
                        </div>
                      </div>
                     
                  </div> 
              </div>
            </div>
        </div>
      </div>
  </template>
  <script setup>
  import {ref,computed,onMounted } from 'vue'
  const typedItems=ref(["FullStack Developer","NodeJs Developer","VueJS Developer"])
  const currentTextIndex=ref(0)
  const nextText = () => {
    currentTextIndex.value = (currentTextIndex.value + 1) % parseInt(typedItems.value.length);
  };
  const currentText = computed(() =>typedItems.value[currentTextIndex.value]  );



  onMounted(() => {
    setInterval(nextText, 4000); 
  });
  </script>
  
  <style>
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 80%;
    }
  }
  @keyframes typewriter-delay {
    from, to {
      width: 100%;
    }
    50% {
      width: 100%;
    }
    51% {
      width: 0;
    }
  }
  .animate-typewriter {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid transparent;
    animation: typewriter 2s steps(14) infinite alternate;
  }

  @keyframes blink {
    0%, 50% {
      opacity: 0;
    }
    51%, 100% {
      opacity: 4;
    }
  }
  
  .animate-blink {

    animation: blink 0.70s step-end infinite;
  }
  



  .bg-header {
  /* background: url('https://wallpaper-house.com/data/out/10/wallpaper2you_424094.jpg') center center no-repeat; */
  background: url('../../assets/image/cover.jpg') center center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
}






    
  .img-flip{
    animation: flipping;
    animation-duration:2s;
    animation-iteration-count:inherit;
  }
  
  @keyframes flipping{
    0% {transform:rotateY(0deg)}
    30% {transform:rotateY(180deg)}
    60% {transform:rotateY(270deg)}
    1000% {transform:rotateY(360deg)}
  }

  </style>