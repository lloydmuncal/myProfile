<template>
    <div class="bg-quote pt-10" >
        <div class="border-7  border-gray-700 ">
            <div class="container mx-auto  ">
                <h2 class="text-3xl lg:text-4xl xl:text-5xl font-semibold text-center text-white mb-8">Skills</h2>
                <div class="flex flex-wrap -mx-4"  >
                <div class=" w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-4 flex justify-center" v-for="(item, i) in skills" :key="i">
                    <div class="bg-indigo-100 bg-opacity-50 p-4 rounded-lg shadow text-center 
                        w-40  hover:transform hover:scale-150 transition-transform ">
                    <div class="flex flex-col items-center justify-center">
                        <img :src="item.img" class="w-12 h-12 rounded-full object-cover border-2 border-black bg-gray-200 mb-2" :alt="item.alt" />
                        <b class="text-lg lg:text-xl xl:text-2xl font-semibold">{{ item.text }}</b>
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
const skills = ref([
        {text:'HTML',value:'80',img:'https://www.shareicon.net/data/512x512/2015/09/04/95596_html_512x512.png',alt:'HTML'},
        {text:'CSS',value:'80',img:'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',alt:'CSS'},
        {text:'Javascript',value:'90',img:'https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png',alt:'Javascript'},
        {text:'Tailwind',value:'70',img:'https://user-images.githubusercontent.com/98990/89711240-4172a200-d989-11ea-8d51-4aaf922fa407.png',alt:'Tailwind CSS'},
        {text:'VueJS',value:'90',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',alt:'VueJS'},
        {text:'Vuetify',value:'90',img:'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png',alt:'Vuetify'},
        {text:'NodeJS',value:'95',img:'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',alt:'NodeJS'},
        {text:'ExpressJS',value:'95',img:'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png',alt:'ExpressJS'},
        {text:'PHP',value:'75',img:'https://cdn-icons-png.flaticon.com/512/5968/5968332.png',alt:'PHP'},
        {text:'Laravel',value:'75',img:'https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png',alt:'Laravel'},
        {text:'MSSQL',value:'90',img:'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',alt:'MSSQL'},
        {text:'MySQL',value:'90',img:'https://camo.githubusercontent.com/f85f882cb31eeaeee657ec955313015c30378e8f56c3dc2f06933b617a276cfd/68747470733a2f2f77372e706e6777696e672e636f6d2f706e67732f3734372f3739382f706e672d7472616e73706172656e742d6d7973716c2d6c6f676f2d6d7973716c2d64617461626173652d7765622d646576656c6f706d656e742d636f6d70757465722d736f6674776172652d646f6c7068696e2d6d6172696e652d6d616d6d616c2d616e696d616c732d746578742d7468756d626e61696c2e706e67',alt:'MySQL'},
        {text:'CouchDB',value:'90',img:'https://couchdb.apache.org/image/couch@2x.png',alt:'CouchDB'},
        {text:'AWS',value:'60',img:'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',alt:'AWS'},
        {text:'OOP',value:'70',img:'https://cdn4.iconfinder.com/data/icons/technology-83/1000/object_programming_development_oriented_developer_object-oriented_programming_software-512.png',alt:'OOP'},
        {text:'RestAPI',value:'80',img:'https://lordicon.com/icons/wired/flat/1330-rest-api.svg',alt:'RestAPI'},
        {text:'Git',value:'80',img:'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',alt:'Git'},
    ])
</script>

<style >
  .bg-quote {
    background: url('https://www.bleepstatic.com/content/hl-images/2022/07/07/man-in-hood-typing.jpg') center center no-repeat;
    background-attachment:fixed;
    opacity: 85;
    background-size: cover;
    width: 100%;
  }
</style>