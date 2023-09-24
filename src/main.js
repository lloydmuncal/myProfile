import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import * as mdi from '@mdi/js';

const app = createApp(App)
// app.use(VueMaterialDesignIcons);
window.mdi = mdi;
  
app.use(createPinia())
app.use(router)

app.mount('#app')
