<template>
    <div class="bg-gray-100  py-12">
        <div >
            <div class="container mx-auto">
                <h2 class="text-3xl lg:text-4xl xl:text-5xl font-semibold text-center mb-8">Contact Me</h2>
                <div class="max-w-3xl mx-auto">
                     <p class="text-center"> You can reach me at</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
                    <div class="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <h3 class="text-xl ml-3 font-semibold mb-2">Email</h3>
                        </div>
                        <p >
                        <a href="mailto:jlloydmuncal@gmail.com" class="text-indigo-600 hover:underline">jlloydmuncal@gmail.com</a>
                    </p>   
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="flex">
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                             <h3 class="text-xl ml-3 font-semibold mb-2">Phone</h3>
                        </div>
                        <p class="text-gray-600">(+63) 910-582-9490</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            <h3 class="text-xl ml-3 font-semibold mb-2">Linked In</h3>
                        </div>
                        <a href="https://www.linkedin.com/in/john-lloyd-muncal-320531276/"  target="_blank" class="text-indigo-600 hover:underline">LinkedIn/JohnlloydMuncal</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gray-400  mt-5 rounded-lg shadow-lg container mx-auto  p-4">
        <h2 class="text-2xl font-semibold mb-4">Message me</h2>
            <form @submit.prevent="submitForm">
            <div class="mb-4">
                <label for="name" class="block text-gray-700 font-medium">Name</label>
                <input
                type="text"
                id="name"
                v-model="formData.name"
                class="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                required
                />
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-medium">Email</label>
                <input
                type="email"
                id="email"
                v-model="formData.email"
                class="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                required
                />
            </div>
            <div class="mb-4">
                <label for="message" class="block text-gray-700 font-medium">Message</label>
                <textarea
                id="message"
                v-model="formData.message"
                class="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                rows="4"
                required
                ></textarea>
            </div>
            <div class="text-center">
                <button
                type="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                Submit
                </button>
            </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const formData = ref({
        name: '',
        email: '',
        message: '',
    });

    const submitForm = () => {
        console.log('Form submitted with data:', formData.value);
    };
</script>

<style>

</style>