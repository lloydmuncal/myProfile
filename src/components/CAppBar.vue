<template>
    <div >
      <div class="bg-gray-900 bg-opacity-90  fixed top-0 left-0 w-full transition-all  duration-300s z-50">
        <nav
          class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div class="flex items-center justify-between ">
            <router-link
              to="/"
              class="
                text-xl
                font-bold
                text-white
                md:text-2xl
                hover:text-blue-400
              "
              >JLM
            </router-link>
            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button
                type="button"
                class="
                  text-white
                  hover:text-gray-400
                  focus:outline-none focus:text-gray-400
                "
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <ul :class="showMenu ? 'flex' : 'hidden'" class=" flex-col mt-4  space-y-4  md:flex md:space-y-0  md:flex-row md:items-center md:space-x-10 md:mt-0">
            <li class="text-white text-sm lg:text-lg font-bold  hover:text-gray-400" v-for="(item,i) in menu" :key="i">
              <a :href="item.to">{{ item.title }} </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  <script setup>
  import {ref,onMounted} from 'vue'

  const showMenu=ref(false)


  const menu = ref([
    {title:'Home',to:'/'},
    {title:'About',to:'#about'},
    {title:'Expeience',to:'#experience'},
    {title:'Skills',to:'#skills'},
    {title:'Project',to:'#project'},
    {title:'Contact',to:'#contact'},
  ])




  </script>
  <style>
 </style>
  