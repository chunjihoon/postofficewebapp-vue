// import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import axios from 'axios'

// import App from './App.vue'
// import router from './router'

//require('./assets/main.css');
const createApp = require("vue").createApp;
const createPinia = require("pinia").createPinia;
const axios = require("axios");

const App = require("./App.vue");
const router = require("./router");

const app = createApp(App);

// app.use(createPinia());
// app.use(router);
// app.mount('#app');

createApp(App).use(router).mount('#app');

app.config.globalProperties.$axios = axios;