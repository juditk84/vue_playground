import './assets/main.css'

import { createPinia } from 'pinia'

import Vue, { createApp } from '@vue/compat';

// import Vue, { createApp } from 'vue';
import BootstrapVue from 'bootstrap-vue';
import HelloBootstrap from './components/HelloBootstrap.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue'
import router from './router'


Vue.use(BootstrapVue);
// const app = createApp(App)
const app = createApp(HelloBootstrap);

app.use(createPinia())
app.use(router)

app.mount('#app')