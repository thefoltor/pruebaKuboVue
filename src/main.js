import { createApp } from 'vue'
import App from './App.vue'
import Movies from './components/Movies'
import Novelties from './components/Novelties'
import AddMovie from './components/AddMovie'
import Error from './components/Error'

import {createRouter,createWebHistory} from 'vue-router'


const routes = [
    { path: '/', component: Movies },
    { path: '/movies', component: Movies },
    { path: '/novelties', component: Novelties },
    { path: '/addMovie', component: AddMovie },
    { path: '/error', component: Error },
  ]

const router = createRouter({
history: createWebHistory(),
routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
